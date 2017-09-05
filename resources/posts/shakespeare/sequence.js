// Defines the index-word and word-index lookup dicts.
const index_to_token = {
  0: 'n', 1: ',', 2: '\n', 3: 'm', 4: 'o', 5: 'c', 6: 'S', 7: 'Q', 8: 'J',
  9: 'v', 10: 'x', 11: 'K', 12: 'N', 13: 'R', 14: '!', 15: ';', 16: ']',
  17: ' ', 18: 'U', 19: 'z', 20: 'I', 21: 'j', 22: 'T', 23: 'E', 24: '&',
  25: 'F', 26: 'd', 27: 'H', 28: 'O', 29: 's', 30: 'f', 31: 'A', 32: ':',
  33: 'X', 34: 'G', 35: '\t', 36: 'r', 37: 'y', 38: 'Y', 39: 'l', 40: 'q',
  41: 'P', 42: 'V', 43: 'k', 44: 'D', 45: 'B', 46: 'i', 47: 'u', 48: 'e',
  49: 'h', 50: 'p', 51: '?', 52: '.', 53: 't', 54: 'g', 55: 'C', 56: '[',
  57: 'W', 58: 'Z', 59: 'w', 60: 'b', 61: 'M', 62: "'", 63: 'L', 64: 'a',
  65: '-',
}

// Defines the reverse mappings.
const token_to_index = Object.keys(index_to_token).reduce(
  (a, k) => {
    a[index_to_token[k]] = parseInt(k);
    return a;
  }, {}
);

// Defines default keys and indices.
const default_index = Object.keys(index_to_token).length;
const default_token = " ";

// Encodes a string to a list of integers.
function encode(s) {
  s = s.split('');

  if (s.length == 0) {
    const keys = Object.keys(token_to_index);
    const random_key = keys[Math.floor(keys.length * Math.random())];
    return encode(random_key);
  }

  // Converts the string to a Float32 array of indices.
  return s.map(i =>
    token_to_index.hasOwnProperty(i) ?
      token_to_index[i] :
      default_index
  );
}

// Decodes a series of integers to a string.
function decode(idxs) {
  return idxs.map(i =>
    index_to_token.hasOwnProperty(i) ?
      index_to_token[i] :
      default_token
  ).join('');
}

// Noisily samples from a distribution that sums to 1.
function sample(x, noise) {
  x = x.map(i => math.exp(math.log(i) / noise));
  const choice_val = math.random(x.reduce((a, i) => a + i));
  var v = 0;
  for (var i = 0, len = x.length; i < len; i++) {
    v += x[i];
    if (v > choice_val) {
      return i;
    }
  }
  return 0;  // Default; this shouldn't be reached.
}

async function initialize() {
  // If the user is on a mobile device, get confirmation before running.
  if (/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    const conf = confirm(
      "We think you're on a mobile connection, and downloading these " +
      ' models may use a lot of data. Do you want to continue?'
    );
    if (!conf) {
      throw new Error(400);
    }
  }
}

Promise.all([initialize(), $(document)]).then(
  _ => {  // Successful initialization.
    const model = new KerasJS.Model({
      filepaths: {
        model: '/resources/posts/shakespeare/model.kerasjs.json',
        weights: '/resources/posts/shakespeare/model.kerasjs_weights.buf',
        metadata: '/resources/posts/shakespeare/model.kerasjs_metadata.json'
      },
      gpu: true,  // Force use the WebGL binaries (otherwise breaks).
    });

    Promise.resolve(model).then(model => {
      // Resets the GRU states.
      function resetStates() {
        ['gru_16', 'gru_17', 'gru_18'].forEach(layer_name => {
          const layer = model.modelLayersMap.get(layer_name);
          layer.currentHiddenState = new KerasJS.Tensor([], [layer.units]);
        });
      }

      // Runs network over the seed and generates the first prediction.
      function process_seed(seed) {
        var p;
        for (var i = 0; i < seed.length; i++) {
          p = model.predict({
            'input_sequence': new Float32Array([seed[i]]),
          });
        }
        return p;
      }

      function generate(idxs, noise) {
        return model.predict({
          'input_sequence': new Float32Array(idxs.slice(-1)),
        }).then(result => {
          idxs.push(sample(result.prediction, noise));
          return idxs;
        });
      }

      function run_model() {
        resetStates();
        const seed = encode($("#seed").val());
        const noise = $("#noise").val();
        const sequence_length = $("#sequence_length").val();

        // Processes the seed to update the model state.
        var p = process_seed(seed);
        p = p.then(result => {
          return [sample(result.prediction, noise)];
        });

        for (var i = 0; i < sequence_length - 1; i++) {
          p = p.then(idxs => generate(idxs, noise));
        }

        // Updates the write box after it's done running.
        return p.then(idxs => {
          const vals = idxs.map(i => index_to_token[i]);
          $("#write-box").html('<b>' + decode(seed) + '</b>' + vals.join(''));
        });
      }

      // Turn on the right methods for the "generate" button.
      $("#generate").removeClass("disabled");
      $("#generate").click(() => {
        $("#write-box").html('Running...');
        setTimeout(run_model, 10);  // Waits a bit to de-queue DOM updates.
      });
    });
  },
  _ => {  // Rejected initialization.
    $("#write-box").html(
      'You chose not to run the model (probably smart). ' +
      'If you changed your mind, you can reload the page.'
    );
  }
);

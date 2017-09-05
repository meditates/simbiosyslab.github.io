# Getting started

If you don't have Jekyll on your home computer, [install it](https://jekyllrb.com/docs/quickstart/).

Clone this repository. You should have 2FA on, so you should clone like this:

```bash
git clone git@github.com:SimBioSysLab/simbiosyslab.github.io.git
```

Run Jekyll to view your working copy:

```bash
cd simbiosyslab.github.io
jekyll serve
```

# Just updating your profile

To just update your profile on the main page, see the instructions [here](https://github.com/SimBioSysLab/simbiosyslab.github.io/blob/master/_config.yml#L27).

Convert your photo to a 400 by 400 pixel image (otherwise it will mess with other peoples' photos). This can be done with ImageMagick from the command line:

```bash
convert \
  -define jpeg:size=400x400 \
  pic.jpg \
  -thumbnail 400x400^ \
  -gravity center \
  -extent 400x400 \
  thumbnail.jpg
```

Update yourself in the `_config.yml` file. For example:

```yaml
members:
  - name: Your name
    website: Link to your personal website
    photo: /resources/profiles/yourself.png
```

#!/usr/bin/env sh

magick image.png -resize 128x128 -verbose icon-128.png
magick image.png -resize 48x48 -verbose icon-48.png
magick image.png -resize 32x32 -verbose icon-32.png
magick icon-128.png  -verbose -modulate 100,0,100 off-128.png

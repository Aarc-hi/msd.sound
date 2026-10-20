# msd.sound

A multisensory memory box for the web. A 3D box (three.js) holds real keepsakes as individual objects. Hover an object to hear what it feels like, press and hold it to hear the memory it carries. Closing the lid layers every memory into one quiet ending.

## Run it

```
node server.cjs
```

Then open http://localhost:3200 and click the lid.

## Sounds

Drop recordings into `sounds/` using the names in `sounds/README.txt`. Missing files play a quiet placeholder tone. `bg-sound.mp3` loops as the background sound.

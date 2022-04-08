## Player

A player component.

### Examples

```tsx
/**
 * title: Audio
 * desc: A basic audio player.
 */

import React from 'react';
import { Player } from 'j23k-lib';

export default () => (
  <Player.Audio
    name="星球大战.mp3"
    url="https://ia600702.us.archive.org/33/items/Classical_Sampler-9615/Kevin_MacLeod_-_Also_Sprach_Zarathustra.mp3"
  ></Player.Audio>
);
```

### Player API

<API hideTitle></API>

### Player.Audio API

<API src="./audio.tsx" hideTitle></API>

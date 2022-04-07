---
nav:
  title: 组件
  path: /player
---

## Player

Player.Audio Demo:

```tsx
import React from 'react';
import { Player } from 'dumi-test';

export default () => (
  <Player>
    <Player.Audio name="星球大战.mp3" url="https://ia600702.us.archive.org/33/items/Classical_Sampler-9615/Kevin_MacLeod_-_Also_Sprach_Zarathustra.mp3"></Player.Audio>
  </Player>
);
```
#### Player
<API hideTitle></API>

#### Player.Audio
<API src="./audio.tsx" hideTitle></API>
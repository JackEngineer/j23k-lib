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
    name="枪林弹雨"
    url="https://cdn2.ear0.com:3321/preview?soundid=20797&type=mp3"
  ></Player.Audio>
);
```

### Player API

<API hideTitle></API>

### Player.Audio API

<API src="./audio.tsx" hideTitle></API>

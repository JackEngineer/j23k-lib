---
title: jack的组件库
hero:
  title: j23k-lib
  desc: 🐏 This library is a business component library developed based on react + antd.
  actions:
    - text: Get Started →
      link: ./components
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: Out of the Box
    desc: A set of high-quality React components out of the box.
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png
    title: Feature 2
    desc: Easy to learn and use
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
    title: Typescript
    desc: Written in TypeScript with predictable static types
footer: Open-source MIT Licensed | Copyright © 2022<br />Powered by [Jack](https://d.umijs.org)
---

## Installation

### Using npm

We recommend using npm to install, it not only makes development easier, but also allow you to take advantage of the rich ecosystem of Javascript packages and tooling.

```bash
# Create directory
$ mkdir myapp && cd myapp

# Install dependency
$ npm i j23k-lib --save
```

## Usage

```ts
import React from 'react';
import { Player } from 'j23k-lib';

export default () => (
  <Player>
    <Player.Audio
      name="星球大战.mp3"
      url="https://ia600702.us.archive.org/33/items/Classical_Sampler-9615/Kevin_MacLeod_-_Also_Sprach_Zarathustra.mp3"
    ></Player.Audio>
  </Player>
);
```

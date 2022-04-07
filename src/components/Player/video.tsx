import React from 'react';
import { MediaProps } from './interface';

interface VideoProps
  extends MediaProps,
    React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> {}

function Video(props: VideoProps) {
  const { prefixCls, customCls, ...rest } = props;
  return <video className={`${prefixCls}-jk-player-video ${customCls}`} {...rest} />;
}

export default Video;

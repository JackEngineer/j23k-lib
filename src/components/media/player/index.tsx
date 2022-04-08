import React from 'react';
import Video from './video';
import Audio from './audio';

export interface PlayerProps {
  key?: React.Key;
  /**
   * className 前缀
   * @default jk
   */
  prefixCls?: string;
  /**
   * 自定义 className
   */
  customCls?: string;
  /**
   * 行内样式
   */
  style?: React.CSSProperties;
  children?: any;
}

function Player(props: PlayerProps) {
  const { prefixCls = 'jk', customCls = '', children, ...rest } = props;
  return (
    <div className={`${prefixCls}-player ${customCls}`} {...rest}>
      {React.cloneElement(children)}
    </div>
  );
}

Player.Video = Video;
Player.Audio = Audio;

export default Player;

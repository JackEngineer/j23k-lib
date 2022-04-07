import moment from 'moment';
import { Button, Progress, ProgressProps } from 'antd';
import { useBoolean } from 'ahooks';
import React, { useEffect, useRef, useState } from 'react';
import {
  CaretRightOutlined,
  PauseOutlined,
  ReloadOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import momentDurationFormatSetup from 'moment-duration-format';
import { MediaProps } from './interface';
import './styles/audio.less';

momentDurationFormatSetup(moment as any);

interface AudioProps
  extends MediaProps,
    React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement> {
  /**
   * 进度条配置
   */
  progressConfig?: ProgressProps;
}

function Audio(props: AudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const {
    url,
    name,
    prefixCls = 'jk',
    customCls = '',
    progressConfig = {},
    preload = 'metadata',
    ...rest
  } = props;
  const {
    strokeColor = {
      '0%': '#0DD6D6',
      '100%': '#0D72D6',
    },
    trailColor = '#D3D7DC',
    showInfo = false,
    ...progressProps
  } = progressConfig;

  // state
  const [duration, setDuration] = useState('00:00'); // 总时长
  const [currentTime, setCurrentTime] = useState('00:00'); // 当前音频的播放位置
  const [percent, setPercent] = useState(0); // 当前进度
  const [isCompleted, setIsCompleted] = useState(false); // 是否播放完成
  const [isLoading, setIsLoading] = useState(true); // 是否加载完成

  // hooks
  const [state, { toggle, setTrue, setFalse }] = useBoolean(false);
  /**
   * 时长展示格式
   * @param this 上下文
   * @returns hh:mm:ss | mm:ss
   */
  function durationFormatTemplate(this: any) {
    return this.duration.asSeconds() >= 3600 ? 'hh:mm:ss' : 'mm:ss';
  }
  /**
   * 播放中
   */
  const timeUpdate = () => {
    const cTime: number = audioRef?.current?.currentTime || 0;
    const dTime: number = audioRef?.current?.duration || 0;
    const per = Math.floor((cTime / dTime) * 100);

    setPercent(per);
    setCurrentTime(
      moment.duration(cTime, 'seconds').format(durationFormatTemplate, {
        trim: false,
      }),
    );
  };
  /**
   * 总时长发生变化
   */
  const durationChange = () => {
    setDuration(
      moment.duration(audioRef?.current?.duration, 'seconds').format(durationFormatTemplate, {
        trim: false,
      }),
    );
  };
  /**
   * 音频播放结束
   */
  const ended = () => {
    setIsCompleted(true);
  };
  /**
   * 跳转指定位置播放
   * @param e
   */
  const seek = (e: any) => {
    setIsCompleted(false);
    setFalse();
    const progress = progressRef?.current;
    if (progress) {
      const pos = (e.pageX - progress?.offsetLeft) / progress?.offsetWidth;
      if (audioRef?.current) {
        audioRef.current.currentTime = pos * audioRef.current.duration;
      }
    }
  };
  
  const waiting = () => {
    console.log('waiting');
  };
  const playing = () => {
    console.log('playing');
  };
  const loadedMetadata = () => {
    console.log('loadedMetadata');
    setIsLoading(false);
  };

  useEffect(() => {
    const audio = audioRef?.current;
    if (isCompleted && audio?.ended) {
      audio?.play();
      setIsCompleted(false);
      setTrue();
    } else {
      state ? audio?.play() : audio?.pause();
    }

    return () => {
      // 销毁
    };
  }, [state]);

  const classNames = `${prefixCls}-player-audio ${customCls}`;
  return (
    <div className={classNames}>
      <figure hidden>
        <audio
          src={url}
          ref={audioRef}
          preload={preload}
          onLoadedMetadata={loadedMetadata}
          onDurationChange={durationChange}
          onTimeUpdate={timeUpdate}
          onEnded={ended}
          onWaiting={waiting}
          onPlaying={playing}
          {...rest}
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </figure>
      <div id="audio-controls" className="controls">
        <div className="controls-left">
          <Button
            className={`play-pause`}
            data-state={isLoading ? 'loading' : isCompleted ? 'reload' : state ? 'play' : 'pause'}
            icon={
              isLoading ? (
                <LoadingOutlined />
              ) : isCompleted ? (
                <ReloadOutlined />
              ) : state ? (
                <PauseOutlined />
              ) : (
                <CaretRightOutlined />
              )
            }
            disabled={isLoading}
            onClick={toggle}
          />
        </div>
        <div className="controls-right">
          <div className="controls-right-top">
            <div className="controls-audio-name">{name}</div>
            <div className="controls-audio-duration">
              {currentTime}/{duration}
            </div>
          </div>
          <div className="controls-right-bottom">
            <div className={`controls-progress-wrap`} onClick={seek} ref={progressRef}>
              <Progress
                className={`controls-progress`}
                strokeColor={strokeColor}
                trailColor={trailColor}
                percent={percent}
                showInfo={showInfo}
                {...progressProps}
              />
              <div
                className="controls-progress-indicator"
                style={{
                  left: `${percent}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Audio;

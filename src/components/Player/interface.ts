export interface MediaProps {
  /**
   * 音视频文件名
   */
  name?: string;
  /**
   * 嵌入的音视频的 URL
   */
  url?: string;
  /**
   * className 前缀
   * @default jk
   */
  prefixCls?: string;
  /**
   * 自定义className
   * @default ' '
   */
  customCls?: string;
}

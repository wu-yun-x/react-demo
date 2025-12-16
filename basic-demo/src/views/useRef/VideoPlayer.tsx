/*
 * @Author: st004362
 * @Date: 2025-12-16 17:49:07
 * @Description:
 * @LastEditTime: 2025-12-16 17:51:59
 * @LastEditors: ST/St004362
 */
import { useState, useRef } from "react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const ref = useRef<HTMLVideoElement | null>(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (ref.current) {
      if (nextIsPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
  }

  return (
    <>
      <button onClick={handleClick}>{isPlaying ? "暂停" : "播放"}</button>
      <video
        width="250"
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}

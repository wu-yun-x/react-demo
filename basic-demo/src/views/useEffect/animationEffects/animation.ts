/*
 * @Author: st004362
 * @Date: 2025-06-09 16:09:42
 * @LastEditors: ST/St004362
 * @LastEditTime: 2025-06-09 16:28:10
 * @Description:
 */
export class FadeInAnimation {
  node: HTMLElement | null;
  duration: number = 0;
  startTime: number | null = null;
  frameId: number | null = null;
  constructor(node: HTMLElement) {
    this.node = node;
  }
  start(duration: number) {
    this.duration = duration;
    if (this.duration === 0) {
      // 立刻跳转到最后
      this.onProgress(1);
    } else {
      this.onProgress(0);
      // 开始动画
      this.startTime = performance.now();
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }
  onFrame() {
    if (this.startTime === null || this.frameId === null) return;
    const timePassed = performance.now() - this.startTime;
    const progress = Math.min(timePassed / this.duration, 1);
    this.onProgress(progress);
    if (progress < 1) {
      // 仍然有更多的帧要绘制
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }
  onProgress(progress: number) {
    if (this.node) {
      this.node.style.opacity = progress.toString();
    }
  }
  stop() {
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
    }
    this.startTime = null;
    this.frameId = null;
    this.duration = 0;
  }
}

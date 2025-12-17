/*
 * @Author: st004362
 * @Date: 2025-12-17 10:01:21
 * @LastEditTime: 2025-12-17 10:05:22
 * @Description: useOnlineStatus
 */
import { useSyncExternalStore } from "react";

/**
 * useOnlineStatus 钩子用于检测用户当前的网络状态（在线/离线）。
 *
 * useSyncExternalStore 的类型定义：
 * useSyncExternalStore<T>(
 *   subscribe: (onStoreChange: () => void) => () => void,
 *   getSnapshot: () => T,
 *   getServerSnapshot?: () => T
 * ): T
 *
 * subscribe 的参数 onStoreChange 类型是 () => void
 * getSnapshot 的返回值类型 T，这里我们用 boolean，因为 navigator.onLine 是 boolean
 */

/**
 * 返回用户是否在线，类型为 boolean
 */
export function useOnlineStatus(): boolean {
  // isOnline 为 boolean，因为 subscribe 和 getSnapshot 返回的是 boolean
  const isOnline: boolean = useSyncExternalStore(subscribe, getSnapshot);
  return isOnline;
}

/**
 * 获取当前网络状态
 * 返回值类型为 boolean，因为 navigator.onLine 返回 boolean
 */
function getSnapshot(): boolean {
  return navigator.onLine;
}

/**
 * 监听网络状态变化
 * @param callback 回调函数类型为 () => void
 * @returns 取消监听的函数，类型为 () => void
 */
function subscribe(callback: () => void): () => void {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

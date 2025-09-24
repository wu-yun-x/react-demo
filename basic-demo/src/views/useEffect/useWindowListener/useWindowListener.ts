import { useEffect } from "react";

export function useWindowListener<T extends keyof WindowEventMap>(
  eventType: T,
  listener: (this: Window, ev: WindowEventMap[T]) => unknown
) {
  useEffect(() => {
    window.addEventListener(eventType, listener);
    return () => {
      window.removeEventListener(eventType, listener);
    };
  }, [eventType, listener]);
}

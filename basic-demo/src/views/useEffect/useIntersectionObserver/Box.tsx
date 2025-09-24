/*
 * @Author: st004362
 * @Date: 2025-06-09 17:51:39
 * @LastEditors: ST/St004362
 * @LastEditTime: 2025-06-09 17:52:02
 * @Description:
 */
import { useRef, useEffect } from "react";
import { useIntersectionObserver } from "./useIntersectionObserver.ts";

export default function Box() {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(
    ref as React.RefObject<HTMLElement>
  );

  useEffect(() => {
    if (isIntersecting) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [isIntersecting]);

  return (
    <div
      ref={ref}
      style={{
        margin: 20,
        height: 100,
        width: 100,
        border: "2px solid black",
        backgroundColor: "blue",
      }}
    />
  );
}

/*
 * @Author: st004362
 * @Date: 2025-12-16 17:39:49
 * @LastEditTime: 2025-12-16 17:53:58
 * @Description: FocusInput
 */
import React, { useRef } from "react";

// 还有另一种方式目前是在一个组件当中直接获取。
// export default function FocusForm() {
//   const inputRef = useRef<HTMLInputElement | null>(null);

//   function handleClick(): void {
//     if (!inputRef.current) return;
//     inputRef.current.focus();
//   }

//   return (
//     <>
//       <input ref={inputRef} />
//       <button onClick={handleClick}>聚焦输入框</button>
//     </>
//   );
// }

const MyInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<"input">
>((props, ref) => {
  return <input {...props} ref={ref} />;
});

export default function Form() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleClick() {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>聚焦输入框</button>
    </>
  );
}

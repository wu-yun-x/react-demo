/*
 * @Author: st004362
 * @Date: 2025-12-16 18:00:38
 * @LastEditTime: 2025-12-16 18:03:44
 * @Description: 文本字段
 */
import React, { useState } from "react";

export default function MyInput() {
  const [text, setText] = useState("hello");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <>
      <input value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button onClick={() => setText("hello")}>Reset</button>
    </>
  );
}

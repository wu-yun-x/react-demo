/*
 * @Author: st004362
 * @Date: 2025-12-16 17:58:42
 * @LastEditTime: 2025-12-16 17:58:49
 * @Description: 计数器
 */
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>You pressed me {count} times</button>;
}

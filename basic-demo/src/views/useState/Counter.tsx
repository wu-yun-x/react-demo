/*
 * @Author: st004362
 * @Date: 2025-12-16 17:58:42
 * @LastEditTime: 2025-12-17 09:27:33
 * @Description: 计数器
 */
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  function handleClick() {
    setCount(count + 1);
    // 这是因为调用 set 函数 不会更新 已经运行代码中的 age 状态变量。
    // 因此，每个 setAge(age + 1) 调用变成了 setAge(43)。
    setCount(count => count + 1)
    // 这样的话就可以解决这个问题因为当前这个为更新函数，它获取 待定状态 并从中计算 下一个状态。
    // 更新函数放到队列当中，在下一次渲染的时候他们按相同的顺序调用
  }

  return <button onClick={handleClick}>You pressed me {count} times</button>;
}

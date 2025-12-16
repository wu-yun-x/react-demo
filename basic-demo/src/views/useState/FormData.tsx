/*
 * @Author: st004362
 * @Date: 2025-12-16 18:06:21
 * @LastEditTime: 2025-12-16 18:07:27
 * @Description: Form data
 */
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState<string>("Taylor");
  const [age, setAge] = useState<number>(42);

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setAge(age + 1)}>Increment age</button>
      <p>
        Hello, {name}. You are {age}.
      </p>
    </>
  );
}

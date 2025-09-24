/*
 * @Author: st004362
 * @Date: 2025-06-09 11:37:24
 * @LastEditors: ST/St004362
 * @LastEditTime: 2025-06-09 13:49:25
 * @Description:
 */
import { useState } from "react";
import { useTasksDispatch } from "./TasksContext.tsx";

// 定义 AddTask 组件
export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
      />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </button>
    </>
  );
}

let nextId = 3;

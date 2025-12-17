// 1. 使用 useMemo 跳过重复计算
import { useState } from "react";
import TodoList from "./TodoList.tsx";
import { createTodos, Tab } from "./utils.ts";

const todos = createTodos();

export default function Memo() {
  const [tab, setTab] = useState<Tab>(Tab.all);
  const [isDark, setIsDark] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setTab(Tab.all)}>All</button>
      <button onClick={() => setTab(Tab.active)}>Active</button>
      <button onClick={() => setTab(Tab.completed)}>Completed</button>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <TodoList todos={todos} tab={tab} theme={isDark ? "dark" : "light"} />
    </>
  );
}

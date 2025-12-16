/*
 * @Author: st004362
 * @Date: 2025-12-16 13:47:46
 * @LastEditors: ST/St004362
 * @LastEditTime: 2025-12-16 14:24:51
 * @Description: useMemo
 */

// 1. 使用 useMemo 跳过重复计算
import { useState} from 'react'
import TodoList from './TodoList.tsx';
import { createTodos, Tab } from './utils.ts'

const todos = createTodos();

export default function App(){
  const [tab, setTab] = useState<Tab>(Tab.all);
  const [isDark, setIsDark] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setTab(Tab.all)}>
        All
      </button>
      <button onClick={() => setTab(Tab.active)}>
        Active
      </button>
      <button onClick={() => setTab(Tab.completed)}>
        Completed
      </button>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <TodoList
        todos={todos}
        tab={tab}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  );
}


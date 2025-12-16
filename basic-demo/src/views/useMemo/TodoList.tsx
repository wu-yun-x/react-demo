import { useMemo } from 'react';
import { filterTodos, Todo, Tab } from './utils.ts'
import List from './List.tsx'
import './index.css'

type Theme = 'dark' | 'light'

export default function TodoList({ todos, theme, tab }: { todos: Todo[], theme: Theme, tab: Tab }) {
  // 第一种方法进行缓存visibleTodos
  const visibleTodos: Todo[] = useMemo(
    () => filterTodos(todos, tab),
    [todos, tab]
  );
  // 第二种方法进行 记忆单个 JSX 节点 手动将 JSX 节点包裹到 useMemo 中并不方便，比如你不能在条件语句中这样做。
  // 这就是为什么通常会选择使用 memo 包装组件而不是使用 useMemo 包装 JSX 节点。
  const children = useMemo(() => <List items={visibleTodos} />, [visibleTodos]);
  // const visibleTodos = filterTodos(todos, tab);
  return (
    <div className={theme}>
      <p><b>Note: <code>filterTodos</code> is artificially slowed down!</b></p>
      {children}
    </div>
  );
}

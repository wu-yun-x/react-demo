/*
 * @Author: st004362
 * @Date: 2025-12-17 09:45:35
 * @LastEditors: ST/St004362
 * @LastEditTime: 2025-12-17 09:54:49
 * @Description: todosStore
 */
// 这是一个第三方 store 的例子，
// 你可能需要把它与 React 集成。

// 如果你的应用完全由 React 构建，
// 我们推荐使用 React state 替代。

// 定义Todo类型
export interface Todo {
  id: number;
  text: string;
}

// 监听器是一个函数，不带参数也没有返回值
type Listener = () => void;

let nextId: number = 0;
let todos: Todo[] = [{ id: nextId++, text: "Todo #1" }];
let listeners: Listener[] = [];

export const todosStore = {
  addTodo(): void {
    todos = [...todos, { id: nextId++, text: "Todo #" + nextId }];
    emitChange();
  },
  subscribe(listener: Listener): () => void {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot(): Todo[] {
    return todos;
  },
};

function emitChange(): void {
  for (const listener of listeners) {
    listener();
  }
}

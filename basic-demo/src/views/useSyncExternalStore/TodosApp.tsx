/*
 * @Author: st004362
 * @Date: 2025-12-17 09:40:51
 * @LastEditors: ST/St004362
 * @LastEditTime: 2025-12-17 09:55:00
 * @Description: TodosApp
 */
import { JSX, useSyncExternalStore } from "react";
import { todosStore, Todo } from "./todoStore";

export default function TodosApp(): JSX.Element {
  const todos: Todo[] = useSyncExternalStore(
    todosStore.subscribe,
    todosStore.getSnapshot
  );
  return (
    <>
      <button onClick={() => todosStore.addTodo()}>Add todo</button>
      <hr />
      <ul>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

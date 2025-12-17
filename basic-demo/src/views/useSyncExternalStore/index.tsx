/*
 * @Author: st004362
 * @Date: 2025-12-16 17:58:01
 * @LastEditTime: 2025-12-17 11:39:01
 * @Description: useState
 */
import { JSX } from "react";
import TodosApp from "./TodosApp";

export default function ExternalStore(): JSX.Element {
  return (
    <div>
      <TodosApp />
    </div>
  );
}

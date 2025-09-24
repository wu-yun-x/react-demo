/*
 * @Author: st004362
 * @Date: 2025-06-09 10:06:20
 * @LastEditors: ST/St004362
 * @LastEditTime: 2025-06-09 13:40:03
 * @Description:
 */
import AddTask from "./AddTask.tsx";
import TaskList from "./TaskList.tsx";
import { TasksProvider } from "./TasksContext.tsx";

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}

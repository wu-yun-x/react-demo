/*
 * @Author: st004362
 * @Date: 2025-04-08 09:33:06
 * @LastEditors: ST/St004362
 * @LastEditTime: 2025-04-09 14:46:07
 * @Description: 
 */
import AddTask from './AddTask';
import TaskList from './TaskList';
import {TasksProvider} from './TasksContext'

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
  </TasksProvider>
  );
}



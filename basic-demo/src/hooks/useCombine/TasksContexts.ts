/*
 * @Author: st004362
 * @Date: 2025-04-09 10:48:44
 * @LastEditors: ST/St004362
 * @LastEditTime: 2025-04-09 15:01:03
 * @Description: 
 */
import { createContext, Dispatch,useContext } from 'react';
import { TaskType,ActionType } from './type';

export const TasksContext = createContext<TaskType[] | null>(null);
export const TasksDispatchContext = createContext<Dispatch<ActionType>>(() => {});

export function useTasks() {
    return useContext(TasksContext);
  }
  
  export function useTasksDispatch() {
    return useContext(TasksDispatchContext);
  }
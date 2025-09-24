
/*
 * @Author: st004362
 * @Date: 2025-04-09 10:48:44
 * @LastEditors: ST/St004362
 * @LastEditTime: 2025-04-09 14:54:19
 * @Description: context
 */
import { Dispatch, useReducer,ReactNode  } from 'react';
import {TasksContext,TasksDispatchContext} from './TasksContexts';
import {TaskType,ActionType} from './type'

interface actionType {
    type: string;
    id?: number;
    task?: TaskType;
    text?: string;
}

export function TasksProvider({ children }: { children: ReactNode }) {
    const [tasks, dispatch]: [TaskType[], Dispatch<ActionType>] = useReducer(tasksReducer, initialTasks);
    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}

function tasksReducer(tasks:TaskType[], action:actionType) {
    switch (action.type) {
      case 'added': {
        return [...tasks, {
          id: action.id!,
          text: action.text!,
          done: false
        }];
      }
      case 'changed': {
        return tasks.map(t => {
          if (t.id === action?.task?.id) {
            return action.task;
          } else {
            return t;
          }
        });
      }
      case 'deleted': {
        return tasks.filter(t => t.id !== action.id);
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }
  
const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];
  


import { createContext, useContext, useReducer } from "react";

// 定义 Task 类型
export type Task = {
  id: number;
  text: string;
  done: boolean;
};

// 定义 action 类型
type TaskAction =
  | { type: "added"; id: number; text: string }
  | { type: "changed"; task: Task }
  | { type: "deleted"; id: number };

const TasksContext = createContext<null | Task[]>(null);
const TasksDispatchContext = createContext<null | React.Dispatch<TaskAction>>(
  null
);

// 定义 TasksProvider 组件
export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

// 获取任务列表的 hook
// eslint-disable-next-line react-refresh/only-export-components
export function useTasks() {
  const tasks = useContext(TasksContext);
  if (tasks === null) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return tasks;
}

// 获取任务 dispatch 的 hook
// eslint-disable-next-line react-refresh/only-export-components
export function useTasksDispatch() {
  const dispatch = useContext(TasksDispatchContext);
  if (dispatch === null) {
    throw new Error("useTasksDispatch must be used within a TasksProvider");
  }
  return dispatch;
}

// 任务 reducer 函数
function tasksReducer(tasks: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
  }
}

// 初始任务列表
const initialTasks: Task[] = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];

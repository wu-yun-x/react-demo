import { useState } from "react";
import { useTasks, useTasksDispatch, Task } from "./TasksContext.tsx";

// 定义 TaskList 组件
export default function TaskList() {
  const tasks = useTasks();

  return (
    <ul>
      {tasks.map((task: Task) => (
        <li key={task.id}>
          <TaskComponent task={task} />
        </li>
      ))}
    </ul>
  );
}

// 定义 Task 组件，为避免与类型名冲突，重命名为 TaskComponent
function TaskComponent({ task }: { task: Task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();

  let taskContent: React.ReactNode;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          dispatch({
            type: "changed",
            task: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />
      {taskContent}
      <button
        onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id,
          });
        }}
      >
        Delete
      </button>
    </label>
  );
}

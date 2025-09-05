// src/components/TaskItem.tsx
import { Task } from '../types/Task';

interface TaskItemProps {
  task: Task;
  toggleTaskCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
}

export default function TaskItem({ task, toggleTaskCompleted, deleteTask }: TaskItemProps) {
  return (
    <li className="flex justify-between items-center p-2 border rounded">
      <div
        className={`cursor-pointer ${task.completed ? 'line-through text-gray-400' : ''}`}
        onClick={() => toggleTaskCompleted(task.id)}
      >
        {task.title}
      </div>
      <button
        className="text-red-500 font-bold"
        onClick={() => deleteTask(task.id)}
      >
        X
      </button>
    </li>
  );
}
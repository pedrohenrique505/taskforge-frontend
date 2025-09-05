import TaskItem from './TaskItem';
import { Task } from '../types/Task';

interface TaskListProps {
  tasks: Task[];
  toggleTaskCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
}

export default function TaskList({ tasks, toggleTaskCompleted, deleteTask }: TaskListProps) {
  return (
    <ul className="mt-4 space-y-2">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTaskCompleted={toggleTaskCompleted}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}
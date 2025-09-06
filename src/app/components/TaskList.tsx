import TaskItem from './TaskItem';
import { Task } from '../types/Task';

interface TaskListProps {
  tasks: Task[];
  toggleTaskCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
}

export default function TaskList({ tasks, toggleTaskCompleted, deleteTask }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 mx-auto mb-6 bg-card-solid border border-theme rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 muted-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <h3 className="text-lg font-medium accent-color mb-2">
          Nenhuma tarefa encontrada
        </h3>
        <p className="muted-color">
          Adicione uma nova tarefa usando o menu lateral
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
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
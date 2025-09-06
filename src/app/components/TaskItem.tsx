import { Task } from '../types/Task';

interface TaskItemProps {
  task: Task;
  toggleTaskCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
}

export default function TaskItem({ task, toggleTaskCompleted, deleteTask }: TaskItemProps) {
  return (
    <li className="group bg-card-solid border border-theme rounded-lg p-4 mb-3 shadow-minimal hover:shadow-minimal-hover transition-all hover-theme">
      <div className="flex justify-between items-center">
        <label className="flex items-center gap-4 cursor-pointer flex-1">
          <div className="relative">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompleted(task.id)}
              className="w-5 h-5 border-2 border-theme bg-transparent appearance-none cursor-pointer transition-all checked:accent-bg checked:border-transparent focus:outline-none focus:ring-2 focus:ring-black/20"
            />
            {task.completed && (
              <svg 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white pointer-events-none"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <span className={`text-base transition-all cursor-pointer ${
            task.completed 
              ? "line-through muted-color" 
              : "text-foreground"
          }`}>
            {task.title}
          </span>
        </label>
        
        <button
          className="p-2 rounded-lg muted-color hover:text-foreground hover-theme transition-all focus:outline-none focus:ring-2 focus:ring-black/20 cursor-pointer"
          onClick={() => deleteTask(task.id)}
          title="Excluir tarefa"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </li>
  );
}
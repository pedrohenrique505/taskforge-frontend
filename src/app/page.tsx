"use client";

import { useState } from "react";
import { useTasks } from "./hooks/useTasks";
import TaskList from "./components/TaskList";
import Sidebar from "./components/Sidebar";

type Filter = "all" | "completed" | "pending";

export default function Home() {
  const { tasks, addTask, toggleTaskCompleted, deleteTask } = useTasks();
  const [filter, setFilter] = useState<Filter>("all");
  const filteredTasks = tasks.filter(task => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="min-h-screen">
      <Sidebar 
        addTask={addTask}
        filter={filter}
        setFilter={setFilter}
      />
      
      <main className="main-content min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold accent-color mb-2">
              Suas Tarefas
            </h1>
            <p className="muted-color">
              {filteredTasks.length} {filteredTasks.length === 1 ? 'tarefa' : 'tarefas'} encontrada{filteredTasks.length !== 1 ? 's' : ''}
            </p>
          </div>
          <TaskList
            tasks={filteredTasks}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
          />
        </div>
      </main>
    </div>
  );
}

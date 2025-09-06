"use client";

import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

interface SidebarProps {
  addTask: (title: string) => void;
  filter: "all" | "completed" | "pending";
  setFilter: (filter: "all" | "completed" | "pending") => void;
}

export default function Sidebar({ addTask, filter, setFilter }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const { theme, toggleTheme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    addTask(newTaskTitle.trim());
    setNewTaskTitle("");
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`sidebar ${!isOpen ? 'closed' : ''}`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold accent-color">TaskForge</h1>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover-theme rounded-lg transition-all lg:hidden cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mb-8">
            <div className="space-y-4">
              <label className="block text-sm font-medium accent-color">
                Nova Tarefa
              </label>
              <input
                type="text"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="Digite uma nova tarefa..."
                className="w-full px-4 py-3 bg-card-solid border border-theme rounded-lg text-foreground placeholder-muted-color focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="w-full py-3 accent-bg text-white rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                disabled={!newTaskTitle.trim()}
              >
                Adicionar Tarefa
              </button>
            </div>
          </form>

          <div className="space-y-4">
            <label className="block text-sm font-medium accent-color">
              Filtros
            </label>
            <div className="space-y-2">
              <button
                onClick={() => setFilter("all")}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all cursor-pointer ${
                  filter === "all" 
                    ? "accent-bg text-white" 
                    : "hover-theme border border-theme"
                }`}
              >
                Todas as Tarefas
              </button>
              <button
                onClick={() => setFilter("pending")}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all cursor-pointer ${
                  filter === "pending" 
                    ? "accent-bg text-white" 
                    : "hover-theme border border-theme"
                }`}
              >
                Pendentes
              </button>
              <button
                onClick={() => setFilter("completed")}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all cursor-pointer ${
                  filter === "completed" 
                    ? "accent-bg text-white" 
                    : "hover-theme border border-theme"
                }`}
              >
                Concluídas
              </button>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-theme">
            <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 hover-theme rounded-lg transition-all cursor-pointer"
            >
              {theme === 'light' ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  <span>Modo Escuro</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>Modo Claro</span>
                </>
              )}
            </button>
          </div>
        </div>
      </aside>

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-6 left-6 p-3 accent-bg text-white rounded-lg shadow-minimal z-50 lg:hidden cursor-pointer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}
    </>
  );
}

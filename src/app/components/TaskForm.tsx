'use client';
import { useState, FormEvent } from 'react';

// Define as props do componente
interface TaskFormProps {
  addTask: (title: string) => void;
}

// Componente recebe props corretamente
export default function TaskForm({ addTask }: TaskFormProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title.trim());
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Digite uma nova tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded flex-1"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
      >
        Adicionar
      </button>
    </form>
  );
}
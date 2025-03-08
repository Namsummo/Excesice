import { useState } from "react";

// TodoFooter.tsx
interface Todo {
  isCompleted: boolean;
}

interface Props {
  todos: Todo[];
  clearCompleted: () => void;
  filters: {
    all: () => void;
    active: () => void;
    Completed: () => void;
  };
}

function TodoFooter({ todos, clearCompleted, filters }: Props) {
  const [activeFilter, setActiveFilter] = useState("all");

  //tim cac cong viec hoan thanh
  const completedCount = todos.filter((todo) => !todo.isCompleted).length;

  return (
    <div>
      <div className="flex justify-between items-center p-3 bg-gray-200 rounded shadow-md w-3xl">
        {/* Hiển thị số công việc đã hoàn thành */}
        <span className="text-gray-700 font-semibold">
          {completedCount} completed
        </span>

        <button
          type="button"
          className={`px-4 py-2 text-black rounded border-2 transition-shadow duration-300 ${
            activeFilter === "all"
              ? "border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
              : "border-transparent"
          }`}
          onClick={() => (filters.all(), setActiveFilter("all"))}
        >
          All
        </button>

        <button
          type="button"
          className={`px-4 py-2 text-black rounded border-2 transition-shadow duration-300 ${
            activeFilter === "active"
              ? "border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
              : "border-transparent"
          }`}
          onClick={() => (filters.active(), setActiveFilter("active"))}
        >
          active
        </button>
        <button
          type="button"
          className={`px-4 py-2 text-black rounded border-2 transition-shadow duration-300 ${
            activeFilter === "Completed"
              ? "border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
              : "border-transparent"
          }`}
          onClick={() => (filters.Completed(), setActiveFilter("Completed"))}
        >
          Completed
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={clearCompleted}
        >
          Clear Completed{" "}
        </button>
      </div>
    </div>
  );
}
export default TodoFooter;

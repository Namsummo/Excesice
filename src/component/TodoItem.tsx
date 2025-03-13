import React, { memo, useMemo, useState } from "react";

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

interface Props {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, newText: string) => void;
}

const TodoItem = memo(({ todo, toggleTodo, deleteTodo, updateTodo }: Props) => {
  const [newText, setNewText] = useState<string>("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleUpdate = (id: number, text: string) => {
    setEditingId(id);
    setNewText(text);
  };

  const handleSave = (id: number) => {
    if (newText.trim()) {
      updateTodo(id, newText);
    }
    setEditingId(null);
    setNewText("");
  };

  const todoClassName = useMemo(() => {
    return `cursor-pointer flex-1 transition-all ${
      todo.isCompleted ? "line-through text-gray-500" : "text-black"
    }`;
  }, [todo.isCompleted]);

  return (
    <li
      key={todo.id}
      className=" flex-row-reverse justify-between items-center p-2 rounded shadow group hover:bg-gray-100 transition-colors duration-200"
    >
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => toggleTodo(todo.id)}
        placeholder="?"
        className="mr-2"
      />
      {/* Gạch ngang chữ */}
      {editingId === todo.id ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={() => handleSave(todo.id)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSave(todo.id);
          }}
          className="flex-1 p-2 border rounded"
        />
      ) : (
        <span
          onDoubleClick={() => handleUpdate(todo.id, todo.text)}
          className={todoClassName}
        >
          {todo.text}
        </span>
      )}
      <button
        type="button"
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 font-bold px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:text-red-700"
      >
        X
      </button>
    </li>
  );
});

export default TodoItem;

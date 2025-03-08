// TodoInput.tsx
import React, { useState } from "react";

interface Props {
  addTodo: (text: string) => void;
  hasTodos: boolean;
  toggleAlltodo: () => void;
}

export default function TodoInput({ addTodo, hasTodos, toggleAlltodo }: Props) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // ngăn chặn tải lại trang
    if (!text.trim()) return;

    addTodo(text); //thêm công việc vào danh sách
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        {/* Nếu có dữ liệu thì hiển thị button dropdown */}
        {hasTodos && (
          <button type="button" onClick={toggleAlltodo}>
            ⬇️
          </button>
        )}
        {/* Input */}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What need to be done?"
          onKeyDown={(e) => {
            if (e.key == "Enter") handleSubmit(e);
          }}
        />
      </form>
    </div>
  );
}

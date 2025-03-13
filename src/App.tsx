// App.tsx
import { useState } from "react";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
import TodoFooter from "./component/TodoFooter";

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<string>("all");

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, isCompleted: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos((pre) =>
      pre.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const toggleAlltodo = () => {
    const allCompleted = todos.every((todo) => todo.isCompleted);
    setTodos((prev) =>
      prev.map((todo) => ({ ...todo, isCompleted: !allCompleted }))
    );
  };

  const updateTodo = (id: number, newText: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const allShowTodos = () => {
    setFilter("all"); // hiẹn thị tất cả công việc
  };

  const activeShow = () => {
    setFilter("active");
  };

  const completedShow = () => {
    setFilter("completed");
  };

  const getFilteredTodos = () => {
    if (filter === "active") {
      return todos.filter((todo) => !todo.isCompleted);
    } else if (filter === "completed") {
      return todos.filter((todo) => todo.isCompleted);
    } else return todos;
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white shadow-md rounded-md p-4">
      <h1 className="text-7xl font-normal text-[#b83f45]">todos</h1>
      {}
      <TodoInput
        addTodo={addTodo}
        hasTodos={todos.length > 0}
        toggleAlltodo={toggleAlltodo}
      />
      {todos.length > 0 && (
        <>
          <TodoList
            todos={getFilteredTodos()}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
          <TodoFooter
            todos={todos}
            filters={{
              all: allShowTodos,
              active: activeShow,
              Completed: completedShow,
            }}
            clearCompleted={clearCompleted}
          />
        </>
      )}
    </div>
  );
}
export default App;

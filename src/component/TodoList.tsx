import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

interface Props {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, newText: string) => void;
}

function TodoList({ todos, toggleTodo, deleteTodo, updateTodo }: Props) {
  return (
    <div className="flex justify-between items-center p-3 bg-gray-200 rounded shadow-md w-3xl">
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

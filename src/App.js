import TodoList from "./components/TodoList/TodoList";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./components/TodoInput/TodoInput";
import useLocalStorage from "./hooks/useLocalStorage";

const TODOS__DATA = [
  {
    id: 1,
    text: "Reactjs",
    completed: false,
  },
  {
    id: 2,
    text: "Node js",
    completed: false,
  },
  {
    id: 3,
    text: "Typescript",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useLocalStorage(TODOS__DATA);

  const addTodo = (todoText) => {
    setTodos([
      {
        id: uuidv4(),
        text: todoText,
        completed: false,
      },
      ...todos,
    ]);
  };

  const deleteTodo = (todoId) => {
    setTodos((curr) => curr.filter((todo) => todo.id !== todoId));
  };

  const completedTodo = (todoId) => {
    setTodos((curr) =>
      curr.map((todo) =>
        todo.id === todoId
          ? { ...todo, completed: todo.completed ? false : true }
          : todo
      )
    );
  };

  return (
    <div className="container">
      <h1>Todo App</h1>

      {/* Todo List */}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        completedTodo={completedTodo}
      />

      {/* Todo Input */}
      <TodoInput addTodo={addTodo} />
    </div>
  );
}

export default App;

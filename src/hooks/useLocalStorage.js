import { useEffect, useState } from "react";

export default function useLocalStorage(initial) {
  const dataLocal = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(dataLocal || initial);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return [todos, setTodos];
}

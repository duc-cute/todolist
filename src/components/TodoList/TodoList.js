import classNames from "classnames/bind";
import styles from "./style.module.css";
import TodoItem from "./TodoItem/TodoItem";
import { motion, AnimatePresence } from "framer-motion";

const cx = classNames.bind(styles);

function TodoList({ todos, deleteTodo, completedTodo }) {
  return (
    <motion.div className={cx("todoList-wrapper")}>
      <AnimatePresence>
        {todos.map((todo) => (
          <TodoItem
            deleteTodo={deleteTodo}
            completedTodo={completedTodo}
            todo={todo}
            key={todo.id}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

export default TodoList;

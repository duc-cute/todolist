import classNames from "classnames/bind";
import styles from "./style.module.css";
import { useState } from "react";
import TodoMenu from "../TodoMenu/TodoMenu";
import { IoIosMore as MoreIcon } from "react-icons/io";
import { IoMdClose as CloseIcon } from "react-icons/io";
import { motion } from "framer-motion";

const cx = classNames.bind(styles);

function TodoItem({ todo, deleteTodo, completedTodo }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((curr) => !curr);
  };

  return (
    <motion.div
      className={cx("todo-wrapper")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className={`${cx("todo-item")} ${isOpen ? cx("open") : ""}`}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "#ccc" : "#333",
        }}
      >
        <span>{todo.text}</span>

        <div className={cx("toggle-icon")} onClick={toggleMenu}>
          {isOpen ? <CloseIcon /> : <MoreIcon />}
        </div>
      </div>
      <TodoMenu
        deleteTodo={deleteTodo}
        completedTodo={completedTodo}
        todo={todo}
        closeMenu={toggleMenu}
      />
    </motion.div>
  );
}

export default TodoItem;

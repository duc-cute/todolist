import classNames from "classnames/bind";
import { useRef, useState } from "react";
import styles from "./style.module.css";
import { IoMdAdd as AddIcon } from "react-icons/io";
import { motion } from "framer-motion";

const cx = classNames.bind(styles);

const variants = {
  open: {
    right: "50%",
    width: 500,
    height: 70,
    opacity: 1,
    transition: {
      right: {
        ease: "easeInOut",
        duration: 0.5,
      },
      width: {
        duration: 0.3,
        delay: 0.5,
      },
      height: {
        duration: 0.3,
        delay: 0.5,
      },
      opacity: {
        duration: 0.1,
      },
    },
  },
  close: {
    right: "0%",
    width: 30,
    height: 30,
    opacity: 0,
    transition: {
      right: {
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.3,
      },
      width: {
        duration: 0.3,
        delay: 0,
      },
      height: {
        duration: 0.3,
        delay: 0,
      },
      opacity: {
        duration: 0.1,
        delay: 0.7,
      },
    },
  },
};

function TodoInput({ addTodo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const inputRef = useRef();

  const handleOpen = () => {
    setIsOpen(true);
    inputRef.current.focus();
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (text.length === 0) return;
    addTodo(text);

    setText("");
    setIsOpen(false);
  };
  return (
    <div className={cx("input-container")}>
      <motion.form
        className={cx("input-form")}
        initial={false}
        variants={variants}
        animate={isOpen ? "open" : "close"}
        onSubmit={handleAddTodo}
      >
        <input
          ref={inputRef}
          type={"text"}
          placeholder={"Add new todo"}
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </motion.form>

      <button
        className={cx("addBtn")}
        onClick={(e) => (isOpen ? handleAddTodo(e) : handleOpen(e))}
      >
        {isOpen ? "Add" : <AddIcon size={30} />}
      </button>
    </div>
  );
}

export default TodoInput;

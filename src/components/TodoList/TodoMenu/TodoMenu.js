import classNames from "classnames/bind";
import styles from "./style.module.css";
import { IoIosTrash as DeleteIcon } from "react-icons/io";
import { IoMdCheckmark as CheckIcon } from "react-icons/io";

const cx = classNames.bind(styles);

function TodoMenu({ todo, closeMenu, deleteTodo, completedTodo }) {
  const handleCompleted = () => {
    completedTodo(todo.id);

    setTimeout(() => {
      closeMenu();
    }, 300);
  };

  return (
    <div className={cx("todo-menu")}>
      <div
        className={cx("btn", "delete-btn")}
        onClick={() => deleteTodo(todo.id)}
      >
        <DeleteIcon />
      </div>

      <div className={cx("btn", "completed-btn")} onClick={handleCompleted}>
        <CheckIcon />
      </div>
    </div>
  );
}

export default TodoMenu;

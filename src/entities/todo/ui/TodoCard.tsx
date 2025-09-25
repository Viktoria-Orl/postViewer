import type { FC } from "react";
import type { Todo } from "../model/types";
import styles from "./TodoCard.module.css";
import clsx from "clsx";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import { Button } from "../../../shared/ui/Button/Button";

type TodoCardProps = {
  todo: Todo;
  handleDelete: (id: number) => void;
};

export const TodoCard: FC<TodoCardProps> = (props) => {
  const { todo, handleDelete } = props;
  const { theme } = useTheme();

  return (
    <li className={clsx(styles.userTodoItem, styles[theme])}>
      <span className={todo.completed ? styles.completedText : ""}>
        {todo.title}
      </span>
      <Button
        onClick={() => handleDelete(todo.id)}
        className={styles.deleteButton}
      >
        ❌
      </Button>
    </li>
  );
};

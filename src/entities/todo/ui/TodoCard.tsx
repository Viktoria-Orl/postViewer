import type { FC } from "react";
import type { Todo } from "../model/types";
import styles from "./TodoCard.module.css";
import clsx from "clsx";
import { useTheme } from "../../../shared/lib/theme/useTheme";

type TodoCardProps = {
  todo: Todo;
};

export const TodoCard: FC<TodoCardProps> = (props) => {
  const { todo } = props;
  const { theme } = useTheme();

  return (
    <li
      className={clsx(
        styles.userTodoItem,
        todo.completed && styles.completed,
        styles[theme],
      )}
    >
      {todo.title}
    </li>
  );
};

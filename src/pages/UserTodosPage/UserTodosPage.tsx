import type { FC } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../../shared/lib/theme/useTheme";
import { mockTodos } from "../../shared/mocks/todos";
import styles from "./UserTodosPage.module.css";

export const UserTodosPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { theme } = useTheme();
  const userId = Number(id);
  const todos = mockTodos.filter((todo) => todo.userId === userId);

  if (todos.length === 0) {
    return <div>No todos found</div>;
  }
  return (
    <div className={`${styles.userTodos} ${styles[theme]}`}>
      <ul className={styles.userTodoList}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`${styles.userTodoItem} ${todo.completed ? styles.completed : ""}`}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

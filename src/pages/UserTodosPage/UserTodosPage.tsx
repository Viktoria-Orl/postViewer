import type { FC } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../../shared/lib/theme/useTheme";
import styles from "./UserTodosPage.module.css";
import { useGetTodosByUserIdQuery } from "../../entities/todo/api/todosApi";
import { skipToken } from "@reduxjs/toolkit/query";

export const UserTodosPage: FC = () => {
  const { theme } = useTheme();
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);
  const isInvalidId = isNaN(userId);

  const {
    data: todos = [],
    error,
    isLoading,
  } = useGetTodosByUserIdQuery(isInvalidId ? skipToken : userId);

  if (isInvalidId) return <div>Invalid user ID</div>;

  if (error) {
    console.error("Error loading posts for user:", error);
    return <div>Error loading todos for user</div>;
  }

  if (!isLoading && todos.length === 0) {
    return <div>No todos found for this user</div>;
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

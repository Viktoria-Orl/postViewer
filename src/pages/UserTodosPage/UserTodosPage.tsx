import type { FC } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../../shared/lib/theme/useTheme";
import {
  useGetTodosByUserIdQuery,
  useDeleteTodoMutation,
} from "../../entities/todo/api/todosApi";
import { skipToken } from "@reduxjs/toolkit/query";
import { Loading } from "../../shared/ui/Loading/Loading";
import styles from "./UserTodosPage.module.css";
import { Button } from "../../shared/ui/Button/Button";

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

  const [deleteTodo] = useDeleteTodoMutation();

  if (isInvalidId) return <div>Invalid user ID</div>;

  if (isLoading) {
    return <Loading text="todos" />;
  }

  if (error) {
    console.error("Error loading posts for user:", error);
    return <div>Error loading todos for user</div>;
  }

  if (!isLoading && todos.length === 0) {
    return <div>No todos found for this user</div>;
  }

  const handleDelete = async (todoId: number) => {
    try {
      const result = await deleteTodo({ id: todoId, userId }).unwrap();
      console.log("delete result:", result);
      console.log("deleted todo id:", todoId,"Todos render:", todos.map(t => t.id));
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  return (
    <div className={`${styles.userTodos} ${styles[theme]}`}>
      <ul className={styles.userTodoList}>
        {todos.map((todo) => (
          <li key={todo.id} className={styles.userTodoItem}>
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
        ))}
      </ul>
    </div>
  );
};

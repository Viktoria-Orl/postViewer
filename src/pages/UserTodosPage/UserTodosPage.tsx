import type { FC } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../../shared/lib/theme/useTheme";
import styles from "./UserTodosPage.module.css";
import { useGetTodosByUserIdQuery } from "../../entities/todo/api/todosApi";
import { skipToken } from "@reduxjs/toolkit/query";
import clsx from "clsx";
import { ItemList } from "../../shared/ui/ItemList/ItemList";
import { TodoCard } from "../../entities/todo/ui/TodoCard";

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
    <ItemList
      items={todos}
      renderItem={(todo) => <TodoCard key={todo.id} todo={todo} />}
      className={clsx(styles.userTodoList, styles[theme])}
    />
  );
};

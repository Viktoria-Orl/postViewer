import type { FC } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../../shared/lib/theme/useTheme";
import {
  useGetTodosByUserIdQuery,
  useDeleteTodoMutation,
} from "../../entities/todo/api/todosApi";
import { skipToken } from "@reduxjs/toolkit/query";
import { Loading } from "../../shared/ui/Loading/Loading";
import { ItemList } from "../../shared/ui/ItemList/ItemList";
import { TodoCard } from "../../entities/todo/ui/TodoCard";
import styles from "./UserTodosPage.module.css";
import clsx from "clsx";

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
      await deleteTodo({ id: todoId, userId }).unwrap();
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  return (
    <ItemList
      items={todos}
      renderItem={(todo) => <TodoCard key={todo.id} todo={todo} handleDelete={handleDelete}/>}
      className={clsx(styles.userTodoList, styles[theme])}
    />
  );
};

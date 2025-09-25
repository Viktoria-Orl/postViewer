import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Todo } from "../model/types";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => "todos",
      providesTags: ["Todos"],
    }),
    getTodosByUserId: builder.query<Todo[], number>({
      query: (userId) => `users/${userId}/todos`,
      providesTags: (_result, _error, userId) => {
        return [{ type: "Todos", id: `USER-${userId}` }];
      },
    }),
    deleteTodo: builder.mutation<void, { id: number; userId: number }>({
      query: ({ id }) => ({ url: `todos/${id}`, method: "DELETE" }),
      invalidatesTags: (_result, _error, { userId }) => {
        return [{ type: "Todos", id: `USER-${userId}` }];
      },
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetTodosByUserIdQuery,
  useDeleteTodoMutation,
} = todosApi;

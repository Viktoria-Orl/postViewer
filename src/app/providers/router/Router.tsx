import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../../../shared/layouts/MainLayout";
import { UserLayout } from "../../../shared/layouts/UserLayout";
import PostsPage from "../../../pages/PostsPage";
import PostDetailsPage from "../../../pages/PostDetailsPage";
import UserAlbumsPage from "../../../pages/UserAlbumsPage";
import UserTodosPage from "../../../pages/UserTodosPage";
import UserPostsPage from "../../../pages/UserPostsPage";
import AlbumPhotosPage from "../../../pages/AlbumPhotosPage";
import type { FC } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <PostsPage /> },
      { path: "posts", element: <PostsPage /> },
      { path: "posts/:id", element: <PostDetailsPage /> },
      { path: "/albums/:id/photos", element: <AlbumPhotosPage /> },
      {
        path: "users/:id",
        element: <UserLayout />,
        children: [
          { path: "posts", element: <UserPostsPage /> },
          { path: "albums", element: <UserAlbumsPage /> },
          { path: "todos", element: <UserTodosPage /> },
        ],
      },
    ],
  },
]);

export const Router: FC = () => {
  return <RouterProvider router={router} />;
};

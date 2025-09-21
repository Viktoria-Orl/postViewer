import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../../../shared/layouts/MainLayout";
import { UserLayout } from "../../../shared/layouts/UserLayout";
import { PostsPage } from "../../../pages/PostsPage/PostsPage";
import { PostDetailsPage } from "../../../pages/PostDetailsPage/PostDetailsPage";
import { UserAlbumsPage } from "../../../pages/UserAlbumsPage/UserAlbumsPage";
import { UserTodosPage } from "../../../pages/UserTodosPage/UserTodosPage";
import { UserPostsPage } from "../../../pages/UserPostsPage/UserPostsPage";
import { AlbumLayout } from "../../../shared/layouts/AlbumLayout";
import { AlbumPhotosPage } from "../../../pages/AlbumPhotosPage/AlbumPhotosPage";
import type { FC } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <PostsPage /> },
      { path: "posts", element: <PostsPage /> },
      { path: "posts/:id", element: <PostDetailsPage /> },
      {
        path: "albums/:albumId",
        element: <AlbumLayout />,
        children: [{ path: "photos", element: <AlbumPhotosPage /> }],
      },
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

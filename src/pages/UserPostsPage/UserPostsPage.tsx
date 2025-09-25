import type { FC } from "react";
import { useParams } from "react-router-dom";
import { PostList } from "../../widgets/PostList/PostList";
import { useGetPostsByUserIdQuery } from "../../entities/post/api/postsApi";
import { skipToken } from "@reduxjs/toolkit/query";

export const UserPostsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);
  const isInvalidId = isNaN(userId);

  const {
    data: posts = [],
    error,
    isLoading,
  } = useGetPostsByUserIdQuery(isInvalidId ? skipToken : userId);

  if (isInvalidId) return <div>Invalid user ID</div>;

  if (error) {
    console.error("Error loading posts for user:", error);
    return <div>Error loading posts for user</div>;
  }

  if (!isLoading && posts.length === 0) {
    return <div>No posts found for this user</div>;
  }

  return <PostList posts={posts} isLoading={isLoading} />;
};

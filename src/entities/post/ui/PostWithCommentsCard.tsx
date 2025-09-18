import type { FC } from "react";
import { useGetCommentsByPostIdQuery } from "../../comment/api/commentsApi";
import { PostCard } from "./PostCard";
import type { Post } from "../model/types";

type PostWithCommentsCardProps = {
  post: Post;
};

export const PostWithCommentsCard: FC<PostWithCommentsCardProps> = ({
  post,
}) => {
  const { data: comments = [], error } = useGetCommentsByPostIdQuery(post.id);

  if (error) {
    console.error(`Ошибка загрузки комментариев для поста ${post.id}:`, error);
  }

  return <PostCard post={post} comments={comments} />;
};

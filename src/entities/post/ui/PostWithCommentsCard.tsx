import type { FC } from "react";
import type { Post } from "../../../shared/model/types";
import { useGetCommentsByPostIdQuery } from "../../comment/api/commentsApi";
import { PostCard } from "./PostCard";

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

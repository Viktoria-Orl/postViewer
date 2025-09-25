import { useGetCommentsByPostIdQuery } from "../../../../entities/comment/api/commentsApi";
import type {
  Post,
  PostWithComments,
} from "../../../../entities/post/model/types";

export const usePostWithComments = (post: Post): PostWithComments => {
  const { data: comments = [], error } = useGetCommentsByPostIdQuery(post.id);

  if (error) {
    console.error(`Ошибка загрузки комментариев для поста ${post.id}:`, error);
  }

  return { post, comments };
};

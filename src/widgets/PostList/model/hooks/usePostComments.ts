import type {
  Post,
  Comment,
  PostWithComments,
} from "../../../../entities/post/model/types";

export const usePostComments = (
  posts: Post[],
  comments: Comment[],
): PostWithComments[] => {
  return posts.map((post) => ({
    post,
    comments: comments.filter((comment) => comment.postId === post.id),
  }));
};

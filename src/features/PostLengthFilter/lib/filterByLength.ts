import type { Post } from "../../../shared/model/types";

export const filterByLength = (
  posts: Post[],
  minLength: number,
  maxLength: number,
): Post[] => {
  return posts.filter(
    (post) => post.title.length >= minLength && post.title.length <= maxLength,
  );
};

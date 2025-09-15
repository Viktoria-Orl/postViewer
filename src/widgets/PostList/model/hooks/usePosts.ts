import { useMemo } from "react";
import type { Post } from "../../../../shared/model/types";
import { mockPosts } from "../../../../shared/mocks/posts";

type UsePostsProps = {
  userId?: number;
};

export const usePosts = ({ userId }: UsePostsProps = {}): Post[] => {
  const posts = useMemo(() => {
    return userId ? mockPosts.filter((p) => p.userId === userId) : mockPosts;
  }, [userId]);

  return posts;
};

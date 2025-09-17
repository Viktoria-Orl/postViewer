import { useGetPostsQuery } from "../../../../entities/post/api/postsApi";
import type { Post } from "../../../../shared/model/types";

export const usePosts = (): { posts: Post[]; isLoading: boolean } => {
  const { data = [], isLoading } = useGetPostsQuery();

  return { posts: data, isLoading };
};

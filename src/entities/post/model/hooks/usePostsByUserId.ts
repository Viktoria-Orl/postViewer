import type { Post } from "../../../../shared/model/types";
import { useGetPostsByUserIdQuery } from "../../api/postsApi";

type UsePostsQueryResult = ReturnType<typeof useGetPostsByUserIdQuery>;

export const usePosts = (
  userId: number,
): {
  posts: Post[];
  isLoading: UsePostsQueryResult["isLoading"];
  error: UsePostsQueryResult["error"];
} => {
  const { data, error, isLoading } = useGetPostsByUserIdQuery(userId);

  return { posts: data ?? [], error, isLoading };
};

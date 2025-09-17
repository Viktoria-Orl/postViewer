import type { Post } from "../../../../shared/model/types";
import { useGetPostsQuery } from "../../api/postsApi";

type UsePostsQueryResult = ReturnType<typeof useGetPostsQuery>;

export const usePosts = (): {
  posts: Post[];
  isLoading: UsePostsQueryResult["isLoading"];
  error: UsePostsQueryResult["error"];
} => {
  const { data, error, isLoading } = useGetPostsQuery();

  return { posts: data ?? [], error, isLoading };
};

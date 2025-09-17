import type { Post } from "../../../../shared/model/types";
import { useGetPostByIdQuery } from "../../api/postsApi";

type UsePostsQueryResult = ReturnType<typeof useGetPostByIdQuery>;

export const usePosts = (
  id: number,
): {
  post?: Post;
  isLoading: UsePostsQueryResult["isLoading"];
  error: UsePostsQueryResult["error"];
} => {
  const { data, error, isLoading } = useGetPostByIdQuery(id);

  return { post: data, error, isLoading };
};

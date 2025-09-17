import { type FC } from "react";
import { PostList } from "../../widgets/PostList/PostList";
import { usePosts } from "../../widgets/PostList/model/hooks/usePosts";

export const PostsPage: FC = () => {
  const { posts, isLoading } = usePosts();

  return <PostList posts={posts} isLoading={isLoading} />;
};

import { type FC } from "react";
import { PostList } from "../../widgets/PostList/PostList";
import { usePosts } from "../../entities/post/model/hooks/usePosts";

export const PostsPage: FC = () => {
  const { posts, error, isLoading } = usePosts();

  if (error) {
    console.error("Ошибка загрузки постов:", error);
    return <div>Ошибка загрузки постов</div>;
  }

  if (posts.length === 0) {
    return <div>No posts found.</div>;
  }

  return <PostList posts={posts} isLoading={isLoading} />;
};

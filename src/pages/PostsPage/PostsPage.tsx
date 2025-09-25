import { type FC } from "react";
import { PostList } from "../../widgets/PostList/PostList";
import { useGetPostsQuery } from "../../entities/post/api/postsApi";

export const PostsPage: FC = () => {
  const { data: posts = [], error, isLoading } = useGetPostsQuery();

  if (error) {
    console.error("Ошибка загрузки постов:", error);
    return <div>Ошибка загрузки постов</div>;
  }

  if (!isLoading && posts.length === 0) {
    return <div>No posts found.</div>;
  }

  return <PostList posts={posts} isLoading={isLoading} />;
};

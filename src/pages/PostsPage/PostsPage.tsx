import { useEffect, useState, type FC } from "react";
import { PostList } from "../../widgets/PostList/PostList";
import { usePosts } from "../../widgets/PostList/model/hooks/usePosts";

export const PostsPage: FC = () => {
  const posts = usePosts();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data fetching or async operation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return <PostList posts={posts} isLoading={isLoading} />;
};

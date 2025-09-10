import { useEffect, useState, type FC } from "react";
import { PostList } from "../widgets/PostList/PostList";
import { mockPosts } from "../shared/mocks/posts";

const PostsPage: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data fetching or async operation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return <PostList posts={mockPosts} isLoading={isLoading} />;
};

export default PostsPage;

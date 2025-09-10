import { useEffect, useState, type FC } from "react";
import { PostList } from "../widgets/PostList/PostList";

const PostsPage: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data fetching or async operation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <PostList isLoading={isLoading} />;
};

export default PostsPage;

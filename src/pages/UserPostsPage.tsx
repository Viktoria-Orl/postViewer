import type { FC } from "react";
import { useParams } from "react-router-dom";
import { usePosts } from "../widgets/PostList/model/hooks/usePosts";
import { PostList } from "../widgets/PostList/PostList";

const UserPostsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const posts = usePosts({ userId: Number(id) });

  return <PostList posts={posts} isLoading={false} />;
};

export default UserPostsPage;

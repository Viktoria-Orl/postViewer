import { Fragment, type FC } from "react";
import styles from "./PostList.module.css";
import { useTheme } from "../../shared/lib/theme/useTheme";
import { mockPosts } from "../../shared/mocks/posts";
import type { Post } from "../../entities/post/model/types";
import { PostCard } from "../../entities/post/ui/PostCard";
import { withLoading } from "../../shared/lib/hoc/withLoading";

export const PostListBase: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.postList} ${styles[theme]}`}>
      {mockPosts.map((post: Post) => (
        <Fragment key={post.id}>
          <PostCard post={post} />
        </Fragment>
      ))}
    </div>
  );
};

export const PostList = withLoading(PostListBase);
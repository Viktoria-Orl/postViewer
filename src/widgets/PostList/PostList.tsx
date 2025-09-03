import { Fragment, type FC } from "react";
import styles from "./PostList.module.css";
import { useTheme } from "../../shared/lib/theme/useTheme";
import { mockPosts } from "../../shared/mocks/posts";
import type { Post } from "../../entities/post/model/types";
import { PostCard } from "../../entities/post/ui/PostCard";

export const PostList: FC = () => {
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

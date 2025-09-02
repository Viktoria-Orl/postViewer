import styles from "./PostList.module.css";
import type { Post } from "../../entities/post/ui/PostCard";
import { postsMock } from "../../shared/mocks/posts";
import PostCard from "../../entities/post/ui/PostCard";
import { useTheme } from "../../shared/lib/theme/useTheme";
import { Fragment } from "react";

export default function PostList() {
  const { theme } = useTheme();

  return (
    <div
      className={`${styles.postList} 
      ${theme === "light" ? styles.light : styles.dark}`}
    >
      {postsMock.map((post: Post) => (
        <Fragment key={post.id}>
          <PostCard post={post}></PostCard>
        </Fragment>
      ))}
    </div>
  );
}

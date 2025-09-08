import type { FC } from "react";
import type { Post } from "../model/types";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import styles from "./PostCard.module.css";

type PostCardProps = {
  post: Post;
};

export const PostCard: FC<PostCardProps> = ({ post }) => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.postCard} ${styles[theme]}`}>
      <h2 className={styles.postCardTitle}>{post.title}</h2>
      <p>{post.body}</p>
      <p className={styles.postCardAuthorId}>Author id: {post.userId}</p>
    </div>
  );
};

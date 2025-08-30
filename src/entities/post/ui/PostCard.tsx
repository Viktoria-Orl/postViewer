import { useTheme } from "../../../shared/lib/theme/useTheme";
import styles from "./PostCard.module.css";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`${styles.postCard}
        ${theme === "light" ? styles.light : styles.dark}`}
    >
      <h2 className={styles.postCardTitle}>{post.title}</h2>
      <p>{post.body}</p>
      <p className={styles.postCardAuthorId}>Author id: {post.userId}</p>
    </div>
  );
}

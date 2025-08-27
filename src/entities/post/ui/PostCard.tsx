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
  return (
    <div className={styles.postCard}>
      <h2 className={styles.postCardTitle}>{post.title}</h2>
      <p>{post.body}</p>
      <p className={styles.postCardAuthorId}>Author id: {post.userId}</p>
    </div>
  )
}

import styles from "./PostList.module.css";
import type { Post } from "../../entities/post/ui/PostCard";
import { postsMock } from "../../shared/mocks/posts";
import PostCard from "../../entities/post/ui/PostCard";

export default function PostList() {
  return (
    <div className={styles.postList}>
      {postsMock.map((post: Post) => (
        <PostCard key={post.id} post={post}></PostCard>
      ))}
    </div>
  );
}

import { useMemo, type FC } from "react";
import { Link, useParams } from "react-router-dom";
import { mockPosts } from "../shared/mocks/posts";
import { mockComments } from "../shared/mocks/comments";
import { CommentList } from "../widgets/CommentList/ui/CommentList";
import { useTheme } from "../shared/lib/theme/useTheme";
import styles from "./PostDetailsPage.module.css";
import { mockUsers } from "../shared/mocks/users";
import type { User } from "../entities/post/model/types";

const PostDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { theme } = useTheme();
  const postId = Number(id);

  const post = useMemo(() => mockPosts.find((p) => p.id === postId), [postId]);

  const postComments = useMemo(
    () => mockComments.filter((c) => c.postId === postId),
    [postId],
  );
  const hasComments: boolean = postComments.length > 0;

  const user: User | undefined = mockUsers.find(
    (user) => user.id === post?.userId,
  );

  if (!post) return <div>Post witn id {postId} not found</div>;
  if (!user) return <div>User witn id {post.userId} not found</div>;

  return (
    <div className={styles.postDetails}>
      <h1 className={styles.postDetailsTitle}>{post.title}</h1>
      <Link
        className={styles.postDetailsAuthor}
        to={`/users/${post.userId}/posts`}
      >
        Author: {user.name}
      </Link>
      <p>{post.body}</p>

      <h2 className={styles.postDetailsCommentsTitle}>
        {hasComments ? postComments.length : "No"} comments
      </h2>
      <CommentList comments={postComments} theme={theme} />
    </div>
  );
};

export default PostDetailsPage;

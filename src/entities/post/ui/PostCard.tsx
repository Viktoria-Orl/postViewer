import { useState, type FC } from "react";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import styles from "./PostCard.module.css";
import { CommentList } from "../../../widgets/CommentList/ui/CommentList";
import { Button } from "../../../shared/ui/Button/Button";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { mockUsers } from "../../../shared/mocks/users";
import type { Post } from "../model/types";
import type { User } from "../../user/model/types";
import type { Comment } from "../../comment/model/types";

type PostCardProps = {
  post: Post;
  comments: Comment[];
};

export const PostCard: FC<PostCardProps> = (props) => {
  const { post, comments } = props;
  const { theme } = useTheme();
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  const toggleComments = () => {
    setIsCommentOpen((prev) => !prev);
  };

  const hasComments: boolean = comments.length > 0;

  const user: User | undefined = mockUsers.find(
    (user) => user.id === post.userId,
  );

  return (
    <div className={clsx(styles.postCard, styles[theme])}>
      <h2 className={styles.postCardTitle}>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h2>
      <Link
        to={`/users/${post.userId}/posts`}
        className={styles.postCardAuthor}
      >
        Author: {user?.name}
      </Link>
      <p>{post.body}</p>

      <div className={styles.postCardFooter}>
        <span>{hasComments ? comments.length : "No"} comments</span>
        {hasComments && (
          <Button onClick={toggleComments} className={styles.toggleButton}>
            {isCommentOpen ? "▲" : "▼"}
          </Button>
        )}
      </div>
      {isCommentOpen && (
        <div className={styles.postCardComments}>
          <CommentList comments={comments} />
        </div>
      )}
    </div>
  );
};

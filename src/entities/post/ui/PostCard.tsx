import { useState, type FC } from "react";
import type { Comment, Post } from "../model/types";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import styles from "./PostCard.module.css";
import { CommentList } from "../../../widgets/CommentList/ui/CommentList";
import { Button } from "../../../shared/ui/Button/Button";

type PostCardProps = {
  post: Post;
  comments: Comment[];
};

export const PostCard: FC<PostCardProps> = ({ post, comments }) => {
  const { theme } = useTheme();
  const [isCommentOpen, setIsCommentOpen] = useState(false);

const toggleComments = () => {
  setIsCommentOpen((prev) => !prev);
};

  const hasComments: boolean = comments.length > 0;

  return (
    <div className={`${styles.postCard} ${styles[theme]}`}>
      <h2 className={styles.postCardTitle}>{post.title}</h2>
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

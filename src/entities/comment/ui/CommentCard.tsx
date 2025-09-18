import type { FC } from "react";
import type { Comment } from "../model/types";
import styles from "./CommentCard.module.css";

type CommentCardProps = {
  comment: Comment;
};

export const CommentCard: FC<CommentCardProps> = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <div className={styles.commentAuthor}>👤 {comment.email}</div>
      <p className={styles.commentBody}>{comment.body}</p>
    </div>
  );
};

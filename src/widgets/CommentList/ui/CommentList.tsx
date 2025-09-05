import type { FC } from "react";
import type { Comment } from "../../../entities/post/model/types";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import styles from "./CommentList.module.css";

type CommentListProps = {
  comments: Comment[];
};

export const CommentList: FC<CommentListProps> = ({ comments }) => {
  const { theme } = useTheme();

  return (
    <ul className={`${styles.commentList} ${styles[theme]}`}>
      {comments.map((comment) => (
        <li key={comment.id} className={styles.comment}>
          <div className={styles.commentAuthor}>👤 {comment.email}</div>
          <p className={styles.commentBody}>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
};

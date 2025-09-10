import type { FC } from "react";
import type { Comment } from "../../../entities/post/model/types";
import styles from "./CommentList.module.css";
import type { Theme } from "../../../shared/lib/theme/ThemeContext";

type CommentListProps = {
  comments: Comment[];
  theme: Theme
};

export const CommentList: FC<CommentListProps> = ({ comments, theme}) => {

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

import { type FC } from "react";
import type { Comment } from "../../../shared/model/types";
import styles from "./CommentList.module.css";
import clsx from "clsx";
import { CommentCard } from "../../../entities/comment/ui/CommentCard";
import type { Theme } from "../../../shared/lib/theme/ThemeContext";

type CommentListProps = {
  comments: Comment[];
  theme: Theme;
};

export const CommentList: FC<CommentListProps> = ({ comments, theme }) => {
  return (
    <div className={clsx(styles.commentList, styles[theme])}>
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

import { type FC } from "react";
import type { Comment } from "../../../shared/model/types";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import styles from "./CommentList.module.css";
import clsx from "clsx";
import { CommentCard } from "../../../entities/comment/ui/CommentCard";

type CommentListProps = {
  comments: Comment[];
};

export const CommentList: FC<CommentListProps> = ({ comments }) => {
  const { theme } = useTheme();

  return (
    <div className={clsx(styles.commentList, styles[theme])}>
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

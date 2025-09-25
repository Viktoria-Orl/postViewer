import { type FC } from "react";
import type { Comment } from "../../../entities/comment/model/types";
import { CommentCard } from "../../../entities/comment/ui/CommentCard";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import { ItemList } from "../../../shared/ui/ItemList/ItemList";
import styles from "./CommentList.module.css";
import clsx from "clsx";

type CommentListProps = {
  comments: Comment[];
};

export const CommentList: FC<CommentListProps> = (props) => {
  const { comments } = props;
  const { theme } = useTheme();

  return (
    <ItemList
      items={comments}
      renderItem={(comment) => (
        <CommentCard key={comment.id} comment={comment} />
      )}
      className={clsx(styles.commentList, styles[theme])}
    />
  );
};

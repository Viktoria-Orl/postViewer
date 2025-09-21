import { type FC } from "react";
import styles from "./PostList.module.css";
import { useTheme } from "../../shared/lib/theme/useTheme";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import { PostLengthFilter } from "../../features/PostLengthFilter/ui/PostLengthFilter";
import { usePostFilter } from "./model/hooks/usePostFilter";
import clsx from "clsx";
import { PostWithCommentsCard } from "../../entities/post/ui/PostWithCommentsCard";
import type { Post } from "../../entities/post/model/types";
import { ItemList } from "../../shared/ui/ItemList/ItemList";

type PostListProps = {
  posts: Post[];
};

export const PostListBase: FC<PostListProps> = (props) => {
  const { posts } = props;
  const { theme } = useTheme();

  const {
    filteredPosts,
    minLength,
    maxLength,
    handleMinChange,
    handleMaxChange,
  } = usePostFilter(posts);

  return (
    <>
      <PostLengthFilter
        minLength={minLength}
        maxLength={maxLength}
        onMinChange={handleMinChange}
        onMaxChange={handleMaxChange}
      />
      <ItemList
        items={filteredPosts}
        renderItem={(post) => (
          <PostWithCommentsCard key={post.id} post={post} />
        )}
        className={clsx(styles.postList, styles[theme])}
      />
    </>
  );
};

export const PostList = withLoading(PostListBase);

import { type FC } from "react";
import styles from "./PostList.module.css";
import { useTheme } from "../../shared/lib/theme/useTheme";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import { PostLengthFilter } from "../../features/PostLengthFilter/ui/PostLengthFilter";
import { usePostFilter } from "./model/hooks/usePostFilter";
import clsx from "clsx";
import { PostWithCommentsCard } from "../../entities/post/ui/PostWithCommentsCard";
import type { Post } from "../../entities/post/model/types";

type PostListProps = {
  posts: Post[];
};

export const PostListBase: FC<PostListProps> = ({ posts }) => {
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
      <div className={clsx(styles.postList, styles[theme])}>
        {filteredPosts.map((post) => (
          <PostWithCommentsCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export const PostList = withLoading(PostListBase);

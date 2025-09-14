import { Fragment, type FC } from "react";
import styles from "./PostList.module.css";
import { useTheme } from "../../shared/lib/theme/useTheme";
import { mockPosts } from "../../shared/mocks/posts";
import { PostCard } from "../../entities/post/ui/PostCard";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import { PostLengthFilter } from "../../features/PostLengthFilter/ui/PostLengthFilter";
import { mockComments } from "../../shared/mocks/comments";
import { usePostFilter } from "./lib/usePostFilter";
import { usePostComments } from "./lib/usePostComments";
import clsx from "clsx";

export const PostListBase: FC = () => {
  const { theme } = useTheme();

  const {
    filteredPosts,
    minLength,
    maxLength,
    handleMinChange,
    handleMaxChange,
  } = usePostFilter(mockPosts);

  const postsWithComments = usePostComments(filteredPosts, mockComments);

  return (
    <>
      <PostLengthFilter
        minLength={minLength}
        maxLength={maxLength}
        onMinChange={handleMinChange}
        onMaxChange={handleMaxChange}
      />
      <div className={clsx(styles.postList, styles[theme])}>
        {postsWithComments.map(({ post, comments }) => (
          <Fragment key={post.id}>
            <PostCard post={post} comments={comments} />
          </Fragment>
        ))}
      </div>
    </>
  );
};

export const PostList = withLoading(PostListBase);

import { Fragment, type FC } from "react";
import styles from "./PostList.module.css";
import { useTheme } from "../../shared/lib/theme/useTheme";
import { PostCard } from "../../entities/post/ui/PostCard";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import { PostLengthFilter } from "../../features/PostLengthFilter/ui/PostLengthFilter";
import { mockComments } from "../../shared/mocks/comments";
import { usePostFilter } from "./model/hooks/usePostFilter";
import { usePostComments } from "./model/hooks/usePostComments";
import type { Post, PostWithComments } from "../../shared/model/types";
import clsx from "clsx";

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

  const postsWithComments: PostWithComments[] = usePostComments(
    filteredPosts,
    mockComments,
  );

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

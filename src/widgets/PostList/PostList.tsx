import { Fragment, useState, type FC } from "react";
import styles from "./PostList.module.css";
import { useTheme } from "../../shared/lib/theme/useTheme";
import { mockPosts } from "../../shared/mocks/posts";
import type { Post } from "../../entities/post/model/types";
import { PostCard } from "../../entities/post/ui/PostCard";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
import { PostLengthFilter } from "../../features/PostLengthFilter/ui/PostLengthFilter";

export const PostListBase: FC = () => {
  const { theme } = useTheme();

  const minTitleLength = Math.min(
    ...mockPosts.map((post) => post.title.length),
  );
  const maxTitleLength = Math.max(
    ...mockPosts.map((post) => post.title.length),
  );
  const [minLength, setMinLength] = useState(minTitleLength);
  const [maxLength, setMaxLength] = useState(maxTitleLength);

  const handleMinChange = (value: number) =>
    value >= minTitleLength && value < maxTitleLength && setMinLength(value);

  const handleMaxChange = (value: number) =>
    value <= maxTitleLength && value > minTitleLength && setMaxLength(value);

  const filteredPosts: Post[] = filterByLength(mockPosts, minLength, maxLength);

  return (
    <>
      <PostLengthFilter
        minLength={minLength}
        maxLength={maxLength}
        onMinChange={handleMinChange}
        onMaxChange={handleMaxChange}
      />
      <div className={`${styles.postList} ${styles[theme]}`}>
        {filteredPosts.map((post: Post) => (
          <Fragment key={post.id}>
            <PostCard post={post} />
          </Fragment>
        ))}
      </div>
    </>
  );
};

export const PostList = withLoading(PostListBase);

import { useState, useCallback, useMemo } from "react";
import type { Post } from "../../../../entities/post/model/types";
import { filterByLength } from "../../../../features/PostLengthFilter/lib/filterByLength";

type UsePostFilterResult = {
  filteredPosts: Post[];
  minLength: number;
  maxLength: number;
  handleMinChange: (value: number) => void;
  handleMaxChange: (value: number) => void;
};

export const usePostFilter = (posts: Post[]): UsePostFilterResult => {
  const minTitleLength = Math.min(...posts.map((post) => post.title.length));
  const maxTitleLength = Math.max(...posts.map((post) => post.title.length));

  const [minLength, setMinLength] = useState(minTitleLength);
  const [maxLength, setMaxLength] = useState(maxTitleLength);

  const handleMinChange = useCallback(
    (value: number) => {
      if (value >= minTitleLength && value < maxLength) {
        setMinLength(value);
      }
    },
    [minTitleLength, maxLength],
  );

  const handleMaxChange = useCallback(
    (value: number) => {
      if (value <= maxTitleLength && value > minLength) {
        setMaxLength(value);
      }
    },
    [maxTitleLength, minLength],
  );

  const filteredPosts: Post[] = useMemo(
    () => filterByLength(posts, minLength, maxLength),
    [posts, minLength, maxLength],
  );

  return {
    filteredPosts,
    minLength,
    maxLength,
    handleMinChange,
    handleMaxChange,
  };
};

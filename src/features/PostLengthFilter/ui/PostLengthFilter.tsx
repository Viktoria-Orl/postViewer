import { memo, type ChangeEvent, type FC } from "react";
import styles from "./PostLengthFilter.module.css";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import clsx from "clsx";

type PostLengthFilterProps = {
  minLength: number;
  maxLength: number;
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
};

const PostLengthFilterBase: FC<PostLengthFilterProps> = (props) => {
  const { minLength, maxLength, onMinChange, onMaxChange } = props;
  const { theme } = useTheme();

  const handleMinLengthChange = (event: ChangeEvent<HTMLInputElement>) => {
    onMinChange(Number(event.target.value));
  };

  const handleMaxLengthChange = (event: ChangeEvent<HTMLInputElement>) => {
    onMaxChange(Number(event.target.value));
  };

  return (
    <div className={clsx(styles.filter, styles[theme])}>
      <span>Filter posts by header length:</span>

      <label>
        from
        <input
          type="number"
          value={minLength}
          onChange={handleMinLengthChange}
        />
      </label>

      <label>
        to
        <input
          type="number"
          value={maxLength}
          onChange={handleMaxLengthChange}
        />
      </label>
    </div>
  );
};

export const PostLengthFilter = memo(PostLengthFilterBase);

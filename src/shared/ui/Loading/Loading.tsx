import type { FC } from "react";
import styles from "./Loading.module.css";

type LoadingProps = {
  text: string;
};

export const Loading: FC<LoadingProps> = (props) => {
  const { text } = props;
  return <div className={styles.loading}>Loading {text}...</div>;
};

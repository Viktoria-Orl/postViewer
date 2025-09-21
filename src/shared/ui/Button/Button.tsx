import type { FC, ReactNode } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
  className?: string;
};

export const Button: FC<ButtonProps> = (props) => {
  const { onClick, children, className } = props;

  return (
    <button className={clsx(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};

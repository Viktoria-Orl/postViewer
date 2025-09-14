import type { FC, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
  className?: string;
};

export const Button: FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button className={`${styles.button} ${className || ""}`} onClick={onClick}>
      {children}
    </button>
  );
};

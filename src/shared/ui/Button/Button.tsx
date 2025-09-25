import type { FC, MouseEventHandler, PropsWithChildren } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { onClick, children, className } = props;

  return (
    <button className={clsx(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};

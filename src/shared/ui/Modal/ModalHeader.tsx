import type { PropsWithChildren } from "react";
import styles from "./Modal.module.css";

export const ModalHeader = (props: PropsWithChildren<object>) => {
  const { children } = props;
  return <div className={styles.modalHeader}>{children}</div>;
};

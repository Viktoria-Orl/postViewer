import type { PropsWithChildren } from "react";
import styles from "./Modal.module.css";

export const ModalBody = (props: PropsWithChildren<object>) => {
  const { children } = props;
  return <div className={styles.modalBody}>{children}</div>;
};

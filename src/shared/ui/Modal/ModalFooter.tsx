import type { PropsWithChildren } from "react";
import styles from "./Modal.module.css";

export const ModalFooter = (props: PropsWithChildren<object>) => {
  const { children } = props;
  return <div className={styles.modalFooter}>{children}</div>;
};

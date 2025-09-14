import type { FC, ReactNode } from "react";
import styles from "./Modal.module.css";

export const ModalFooter: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles.modalFooter}>{children}</div>;
};

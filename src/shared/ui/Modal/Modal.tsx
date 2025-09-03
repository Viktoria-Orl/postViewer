import { createPortal } from "react-dom";
import { Button } from "../Button/Button";
import styles from "./Modal.module.css";
import { useTheme } from "../../lib/theme/useTheme";
import type { FC } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export const Modal: FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const modalRoot = document.getElementById("portal-root");
  const { theme } = useTheme();

  if (!isOpen || !modalRoot) return null;

  return createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={`${styles.modalContent} ${styles[theme]}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <Button onClick={onClose}>❌</Button>
          {title && <h2>{title}</h2>}
        </div>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>,
    modalRoot,
  );
};

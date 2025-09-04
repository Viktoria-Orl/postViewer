import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { useTheme } from "../../lib/theme/useTheme";
import type { FC } from "react";

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

export const Modal: FC<ModalProps> & {
  Header: FC<{ children: React.ReactNode }>;
  Body: FC<{ children: React.ReactNode }>;
  Footer: FC<{ children: React.ReactNode }>;
} = ({ isOpen, closeModal, children }) => {
  const modalRoot = document.getElementById("portal-root");
  const { theme } = useTheme();

  if (!isOpen || !modalRoot) return null;
  
  console.log(styles.modalHeader); 
  console.log(styles.modalBody);

  return createPortal(
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div
        className={`${styles.modalContent} ${styles[theme]}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    modalRoot,
  );
};

export const ModalHeader: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={styles.modalHeader}>{children}</div>
);

export const ModalBody: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={styles.modalBody}>{children}</div>
);

export const ModalFooter: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={styles.modalFooter}>{children}</div>
);

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

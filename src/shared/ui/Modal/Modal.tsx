import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { useTheme } from "../../lib/theme/useTheme";
import type {
  FC,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
} from "react";
import { ModalHeader } from "./ModalHeader";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";
import clsx from "clsx";

type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  closeModal: MouseEventHandler<HTMLDivElement>;
}>;

export const Modal: FC<ModalProps> & {
  Header: FC<{ children: ReactNode }>;
  Body: FC<{ children: ReactNode }>;
  Footer: FC<{ children: ReactNode }>;
} = (props) => {
  const { isOpen, closeModal, children } = props;
  const modalRoot = document.getElementById("portal-root");
  const { theme } = useTheme();

  if (!isOpen || !modalRoot) return null;

  return createPortal(
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div
        className={clsx(styles.modalContent, styles[theme])}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    modalRoot,
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

import { useState, type FC } from "react";
import { ThemeSwitcher } from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import { useTheme } from "../../shared/lib/theme/useTheme";
import styles from "./Header.module.css";
import { Button } from "../../shared/ui/Button/Button";
import { Modal } from "../../shared/ui/Modal/Modal";
import clsx from "clsx";
import { Link, useLocation, useNavigate } from "react-router-dom";

const modalContent = (
  <>
    <p>
      Приложение для просмотра постов и комментариев Post viewer app, создано в
      рамках учебного проекта.
    </p>
    <p>
      В рамках <b>домашнего задания 6</b> реализовано:
    </p>
    <p>✅ Типизированы все сущности</p>
    <p>✅ Внедрен дженерик ItemList, все страницы переписаны на его использование, props теперь принимаются как единое значение и деструктурируются внутри компонента</p>
  </>
);

export const Header: FC = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const location = useLocation();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  const isHomePage = location.pathname === "/";

  return (
    <header className={clsx(styles.header, styles[theme])}>
      <h1 className={styles.headerTitle}>
        <Link to="/">Post and comment viewer app</Link>
      </h1>
      <div className={styles.actions}>
        {!isHomePage && <Button onClick={handleBack}>↩</Button>}
        <Button onClick={openModal}>ℹ️</Button>
        <ThemeSwitcher></ThemeSwitcher>
      </div>

      <Modal isOpen={isOpen} closeModal={closeModal}>
        <Modal.Header>
          <Button onClick={closeModal}>❌</Button>
          <h2>О проекте</h2>
        </Modal.Header>
        <Modal.Body>{modalContent}</Modal.Body>
        <Modal.Footer>
          <a
            href="https://github.com/Viktoria-Orl/postViewer/"
            target="_blank"
            className={styles.modalLink}
          >
            🔗 GitHub проекта
          </a>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

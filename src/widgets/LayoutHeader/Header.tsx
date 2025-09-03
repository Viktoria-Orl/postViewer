import { useState, type FC } from "react";
import { ThemeSwitcher } from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import { useTheme } from "../../shared/lib/theme/useTheme";
import styles from "./Header.module.css";
import { Button } from "../../shared/ui/Button/Button";
import { Modal } from "../../shared/ui/Modal/Modal";

export const Header: FC = () => {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <h1>Post and comment viewer app</h1>
      <div className={styles.actions}>
        <Button onClick={openModal}>ℹ️</Button>
        <ThemeSwitcher></ThemeSwitcher>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="О проекте">
        <p>
          Приложение для просмотра постов и комментариев Post viewer app,
          создано в рамках учебного проекта.
        </p>
        <p>Уже реализовано:</p>
        <p>
          ✅Код организован по FSD-архитектуре, для стилизации компонентов
          используются CSS Modules{" "}
        </p>
        <p>
          ✅Посты отображаются списком с использованием React.Fragment и ключей
        </p>
        <p>✅Настроено переключение темы (светлая/тёмная) через ThemeContext</p>
        <p>
          ✅Добавлено модальное окно через React.Portal, которое открывается из
          шапки
        </p>
      </Modal>
    </header>
  );
};

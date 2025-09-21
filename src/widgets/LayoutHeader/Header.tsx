import { useState, type FC } from "react";
import { ThemeSwitcher } from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import { useTheme } from "../../shared/lib/theme/useTheme";
import styles from "./Header.module.css";
import { Button } from "../../shared/ui/Button/Button";
import { Modal } from "../../shared/ui/Modal/Modal";
import clsx from "clsx";

const modalContent = (
  <>
    <p>
      Приложение для просмотра постов и комментариев Post viewer app, создано в
      рамках учебного проекта.
    </p>
    <p>
      В рамках <b>домашнего задания 3</b> реализовано:
    </p>
    <p>
      ✅ Реализовано отображение модального окна с использованием compound
      components
    </p>
    <p>
      ✅ Добавлен HOC withLoading для PostList; имитация загрузки и задержки в
      MainLayout
    </p>
    <p>✅ Настроена фильтрация постов по длине заголовка</p>
    <p>
      ✅ Добавлены комментарии к постам CommentList, которые
      разворачиваются/сворачиваются из постов PostCard (в PostCard для
      комментариев использован useState)
    </p>
    <p>
      ✅ Оптимизирован PostList: мемоизация через useMemo для filteredPosts и
      postsWithComments, логика фильтрации вынесена в отдельный usePostFilter,
      PostLengthFilter обернут в React.memo, хендлеры для фильтров мемоизированы
      через useCallback в usePostFilter, логика получения комментариев к посту
      вынесена в отдельный usePostComments.
    </p>
    <p>✅ Настроена стилизация через clsx</p>
  </>
);

export const Header: FC = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <header className={clsx(styles.header, styles[theme])}>
      <h1>Post and comment viewer app</h1>
      <div className={styles.actions}>
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
            className={styles.link}
          >
            🔗 GitHub проекта
          </a>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

import type { FC } from "react";
import { Footer } from "../../widgets/LayoutFooter/Footer";
import { Header } from "../../widgets/LayoutHeader/Header";
import { PostList } from "../../widgets/PostList/PostList";
import styles from "./MainLayout.module.css";

export const MainLayout: FC = () => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <main className={styles.mainСontent}>
        <PostList />
      </main>
      <Footer />
    </div>
  );
};

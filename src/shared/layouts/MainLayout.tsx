import { useEffect, useState, type FC } from "react";
import { Footer } from "../../widgets/LayoutFooter/Footer";
import { Header } from "../../widgets/LayoutHeader/Header";
import { PostList } from "../../widgets/PostList/PostList";
import styles from "./MainLayout.module.css";
import { useTheme } from "../lib/theme/useTheme";

export const MainLayout: FC = () => {
  const {theme} = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data fetching or async operation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.mainLayout}>
      <Header />
      <main className={`${styles.mainContent} ${styles[theme]}`}>
        <PostList isLoading={isLoading} />
      </main>
      <Footer />
    </div>
  );
};

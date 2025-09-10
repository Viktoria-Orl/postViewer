import { type FC } from "react";
import { Footer } from "../../widgets/LayoutFooter/Footer";
import { Header } from "../../widgets/LayoutHeader/Header";
import styles from "./MainLayout.module.css";
import { useTheme } from "../lib/theme/useTheme";
import { Outlet } from "react-router-dom";

export const MainLayout: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={styles.mainLayout}>
      <Header />
      <main className={`${styles.mainContent} ${styles[theme]}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

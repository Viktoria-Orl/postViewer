import type { FC } from "react";
import { useTheme } from "../../shared/lib/theme/useTheme";
import styles from "./Footer.module.css";
import clsx from "clsx";

export const Footer: FC = () => {
  const { theme } = useTheme();

  return (
    <footer className={clsx(styles.footer, styles[theme])}>
      © 2025 PostViewerApp
    </footer>
  );
};

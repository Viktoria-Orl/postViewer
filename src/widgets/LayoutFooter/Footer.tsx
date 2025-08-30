import { useTheme } from "../../shared/lib/theme/useTheme";
import styles from "./Footer.module.css";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`${styles.footer}
      ${theme === "light" ? styles.light : styles.dark}`}
    >
      © 2025 PostViewerApp
    </footer>
  );
}

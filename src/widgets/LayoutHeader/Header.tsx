import { ThemeSwitcher } from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import { useTheme } from "../../shared/lib/theme/useTheme";
import styles from "./Header.module.css";

export default function Header() {
  const { theme } = useTheme();

  return (
    <header
      className={`${styles.header}
      ${theme === "light" ? styles.light : styles.dark}`}
    >
      <h1>Post and comment viewer app</h1>
      <ThemeSwitcher></ThemeSwitcher>
    </header>
  );
}

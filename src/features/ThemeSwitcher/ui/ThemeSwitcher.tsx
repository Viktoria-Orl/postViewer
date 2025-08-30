import { useTheme } from "../../../shared/lib/theme/useTheme";
import styles from "./ThemeSwitcher.module.css";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const icon = theme === "light" ? "🔆" : "🌙";

  return (
    <button className={styles.button} onClick={toggleTheme}>
      {icon}
    </button>
  );
}

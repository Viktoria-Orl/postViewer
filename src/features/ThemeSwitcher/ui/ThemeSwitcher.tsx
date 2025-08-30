import { useTheme } from "../../../shared/lib/theme/useTheme";
import { Button } from "../../../shared/ui/Button/Button";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const icon = theme === "light" ? "🔆" : "🌙";

  return <Button onClick={toggleTheme}>{icon}</Button>;
}

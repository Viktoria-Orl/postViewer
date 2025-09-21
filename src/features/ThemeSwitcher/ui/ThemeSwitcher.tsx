import type { FC, MouseEventHandler } from "react";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import { Button } from "../../../shared/ui/Button/Button";

export const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useTheme();
  const icon: string = theme === "light" ? "🔆" : "🌙";

  const handleToggle: MouseEventHandler<HTMLButtonElement> = () => {
    toggleTheme();
  };

  return <Button onClick={handleToggle}>{icon}</Button>;
};

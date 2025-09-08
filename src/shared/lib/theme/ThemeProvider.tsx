import { useState, type FC } from "react";
import { ThemeContext, type Theme } from "./ThemeContext";

export const ThemeProvider: FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

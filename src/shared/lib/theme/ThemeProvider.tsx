import { useState, type FC, type PropsWithChildren } from "react";
import { ThemeContext, type Theme } from "./ThemeContext";

export const ThemeProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;
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

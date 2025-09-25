import { useState, type PropsWithChildren } from "react";
import { ThemeContext, type Theme } from "./ThemeContext";

export const ThemeProvider = (props: PropsWithChildren<object>) => {
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

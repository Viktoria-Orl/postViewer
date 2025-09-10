import type { FC } from "react";
import { ThemeProvider } from "../shared/lib/theme/ThemeProvider";
import { Router } from "./providers/router/Router";

export const App: FC = () => {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
};

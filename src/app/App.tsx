import type { FC } from "react";
import { MainLayout } from "../shared/layouts/MainLayout";
import { ThemeProvider } from "../shared/lib/theme/ThemeProvider";

export const App: FC = () => {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
};

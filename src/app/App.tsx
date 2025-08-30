import MainLayout from "../shared/layouts/MainLayout";
import { ThemeProvider } from "../shared/lib/theme/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}

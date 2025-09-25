import type { FC } from "react";
import { ThemeProvider } from "../shared/lib/theme/ThemeProvider";
import { Router } from "./providers/router/Router";
import { Provider } from "react-redux";
import { store } from "./providers/store/store";

export const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </Provider>
  );
};

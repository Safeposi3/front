import "@/styles/globals.css";
import { Provider as ReduxProvider } from "react-redux";
import store from "@/redux/store";
import ThemeProvider from "@/context/ThemeContext";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ReduxProvider>
  );
}

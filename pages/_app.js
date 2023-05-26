import "@/styles/globals.css";
import { Provider as ReduxProvider } from "react-redux";
import store from "../redux/store";
import { UserProvider } from "../context/UserContext";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ReduxProvider store={store}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ReduxProvider>
  );
}

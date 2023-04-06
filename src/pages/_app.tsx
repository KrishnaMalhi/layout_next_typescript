import MainLayout from "@app/layout";
import "@app/styles/globals.scss";
import type { AppProps } from "next/app";
import { SSRProvider } from "react-bootstrap";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { AnimatePresence } from "framer-motion";
import store from "@app/store";

export default function App({ Component, pageProps }: AppProps) {
  const lang = "en";
  const dir = "ltr";
  return (
    <Provider store={store}>
      <AnimatePresence>
        <ThemeProvider
          dir={dir}
          breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
          minBreakpoint="xxs"
        >
          <SSRProvider>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </SSRProvider>
        </ThemeProvider>
      </AnimatePresence>
    </Provider>
  );
}

{
  // SSRProvider:
  /* React-Bootstrap automatically generates an id for some components (such as DropdownToggle)
if they are not provided. This is done for accessibility purposes. */
}

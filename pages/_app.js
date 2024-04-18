import App from "next/app";
import { ContextProvider } from "@src/contexts/AppContext";
import { useStore } from "@src/redux/store";
import { Provider } from "react-redux";
import { cookie } from "@src/utils/cache/cookie";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import Heads from "@src/layouts/Heads";
import Layout from "@src/layouts/index";
import Theme from "@src/components/Theme/index";
import Maintenance from "@src/layouts/Maintenance";
import "@styles/main.css";
import { isUndefined } from "@src/utils/common";
import { useEffect, useState } from "react";
import { __LOCALDB } from "@src/utils/database";
import { NoSsr } from "@mui/material";

const __LOCALSESSION = cookie.get();

// Default App
const DEFApp = ({ Component, pageProps, data }) => {
  const router = useRouter();
  const [prefetch, setPrefetch] = useState();
  const store = useStore(pageProps?.initialReduxState);
  const isMaintenance = false;

  useEffect(() => {
    if (isUndefined(__LOCALSESSION) && router.pathname !== "/auth/login") {
      window.location.href = "/auth/login";
      return;
    }

    if (!isUndefined(__LOCALSESSION) && router.pathname === "/auth/login") {
      window.location.href = "/";
      return;
    }

    setPrefetch(true);
    __LOCALDB.__admin();
  }, []);

  return (
    <Provider store={store}>
      <ContextProvider>
        {isMaintenance ? (
          <Maintenance />
        ) : (
          <Theme>
            <NoSsr>
              <NextNProgress color="#fff" />
              <Heads />
              {prefetch && (
                <Layout __LOCALSESSION={__LOCALSESSION}>
                  <Component
                    {...pageProps}
                    data={data}
                    __LOCALSESSION={__LOCALSESSION}
                  />
                </Layout>
              )}
            </NoSsr>
          </Theme>
        )}
      </ContextProvider>
    </Provider>
  );
};

DEFApp.getInitialProps = async (context) => {
  const ctx = await App.getInitialProps(context);
  let data = {}; // add custom data here
  return { ...ctx, data: data };
};

export default DEFApp;

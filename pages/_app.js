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
import { useEffect } from "react";
import { __LOCALDB } from "@src/utils/database";

const __LOCALSESSION = cookie.get();

// Default App
const DEFApp = ({ Component, pageProps, data }) => {
  const router = useRouter();
  const store = useStore(pageProps?.initialReduxState);
  const isMaintenance = false;

  useEffect(() => {
    if (isUndefined(__LOCALSESSION) && router.pathname !== "/login") {
      router.push("/auth/login");
    }

    __LOCALDB.__admin();
  }, []);

  return (
    <Provider store={store}>
      <ContextProvider>
        {isMaintenance ? (
          <Maintenance />
        ) : (
          <Theme>
            <NextNProgress color="#fff" />
            <Heads />
            <Layout __LOCALSESSION={__LOCALSESSION}>
              <Component
                {...pageProps}
                data={data}
                __LOCALSESSION={__LOCALSESSION}
              />
            </Layout>
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

import App from "next/app";
import { useStore } from "@src/redux/store";
import { Provider } from "react-redux";
import NextNProgress from "nextjs-progressbar";

import Heads from "@src/layouts/Heads";
import Layout from "@src/layouts/index";
import Theme from "@src/components/Theme/index";
import "@styles/main.css";
import Maintenance from "@src/layouts/Maintenance";
import { cookie } from "@src/utils/cache/cookie";

const __LOCALSESSION = cookie.get();

// Default App
const DEFApp = ({ Component, pageProps, data }) => {
  const store = useStore(pageProps?.initialReduxState);
  const isMaintenance = false;

  return (
    <Provider store={store}>
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
    </Provider>
  );
};

DEFApp.getInitialProps = async (context) => {
  const ctx = await App.getInitialProps(context);
  let data = {}; // add custom data here
  return { ...ctx, data: data };
};

export default DEFApp;

import App from "next/app";
import { useStore } from "@src/redux/store";
import { Provider } from "react-redux";
import NextNProgress from "nextjs-progressbar";

import Heads from "@src/layouts/Heads";
import Layout from "@src/layouts/index";
import Theme from "@src/components/Theme/index";
import "@styles/main.css";
import Maintenance from "@src/layouts/Maintenance";

// Default App
const DEFApp = ({ Component, pageProps, data }) => {
  const store = useStore(pageProps?.initialReduxState);
  const incompleteRqrmnts = false; //@DESC: Here is a function that check the data if requirements are valid.

  return (
    <Provider store={store}>
      {incompleteRqrmnts ? (
        <Maintenance />
      ) : (
        <Theme>
          <Heads settings={{}} />
          <NextNProgress color="#fff" />
          <Layout>
            <Component {...pageProps} data={data} />
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

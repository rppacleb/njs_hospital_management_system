import { APP_CONFIG } from "@src/utils/app";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const { APP_NAME, APP_META, APP_VERSION, APP_LOCALE, APP_COLORS } =
    APP_CONFIG;

  return (
    <Html lang={APP_LOCALE} version={APP_VERSION}>
      <Head>
        <link rel="icon" href="favicon.png" />
        <meta name={APP_META.NAME} content={APP_META.DESCRIPTION} />
        <meta name="theme-color" content={APP_COLORS.THEME} />
        <meta name="application-name" content={APP_NAME} />
        <meta name="msapplication-tooltip" content={APP_NAME} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

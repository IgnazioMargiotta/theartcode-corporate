import { Html, Head, Main, NextScript } from "next/document";

// Components
import { GoogleAdsScript } from "@theartcode/components";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/assets/images/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:slnt,wght@-10..0,100..900&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <GoogleAdsScript />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

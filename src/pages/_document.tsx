import { googleTagManagerScript } from '@theartcode/components/google-scripts';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {

  render() {
    const lang = this.props.__NEXT_DATA__.page.startsWith('/it') ? 'it' : 'en';

    return (
      <Html lang={lang}>
        <Head>
          <link rel="icon" type="image/png" href="/assets/images/favicon.png" />
          {/* Google Tag Manager */}
          <Script
              id="gtag-manager"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: googleTagManagerScript
            }} />
          {/* End Google Tag Manager */}
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
            <noscript>
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W7PQKHG7"
              height="0" width="0" style={{display:"none",visibility:"hidden"}}>
              </iframe>
            </noscript>
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

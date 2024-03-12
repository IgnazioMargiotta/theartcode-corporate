import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

  render() {
    const lang = this.props.__NEXT_DATA__.page.startsWith('/it') ? 'it' : 'en';

    return (
      <Html lang={lang}>
        <Head>
          <link rel="icon" type="image/png" href="/assets/images/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

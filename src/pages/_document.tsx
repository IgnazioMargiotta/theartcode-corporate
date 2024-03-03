import { Html, Head, Main, NextScript } from "next/document"

// Components
import OpenGraph from "@theartcode/components/open-graph/open-graph.component";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="The artCode Web App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png"  href="/assets/images/favicon.png" />
        <OpenGraph 
          url='string'
          title='The artCode - Where art meets code'
          type='website'
          description='Where art meets code'
          site_name='The artCode'
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:slnt,wght@-10..0,100..900&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <button>
          <svg viewBox="0 0 20 20">
            <use href="#arrow-double-top"></use>
          </svg>
        </button>
      </body>
    </Html>
  );
}

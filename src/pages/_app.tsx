import { useEffect } from "react";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import TagManager from 'react-gtm-module';

// Styles
import "@theartcode/styles/globals.scss";

// Utils
import client from "@theartcode/api/apollo-client";

export default function App({ Component, pageProps }: AppProps) {

  useEffect(()=>{
    TagManager.initialize({
      gtmId: 'G-PXKMHSTBF9'
    })
  },[]);

  return (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
  );
}

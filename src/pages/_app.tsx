import { useEffect } from "react";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
// import TagManager from 'react-gtm-module';

// Styles
import "../styles/globals.scss";

// Utils
import client from "@theartcode/api/apollo-client";
import { ThemeProvider } from "../contexts/ThemeContext";
import { IubendaScript, GoogleAdsScript } from "@theartcode/components";

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(()=>{
  //   TagManager.initialize({
  //     gtmId: 'G-PXKMHSTBF9'
  //   })
  // },[]);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <IubendaScript />
        <GoogleAdsScript />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

import { useEffect } from "react";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import TagManager from 'react-gtm-module';

// Styles
import '../styles/globals.scss';

// Utils
import client from "@theartcode/api/apollo-client";

export default function App({ Component, pageProps }: AppProps) {

  // useEffect(()=>{
  //   TagManager.initialize({
  //     gtmId: 'G-PXKMHSTBF9'
  //   })
  // },[]);

  useEffect(() => {
    // const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const checkTheme = localStorage.getItem('theme');
    if (checkTheme && checkTheme === 'dark') {
      document.documentElement.classList.add('dark-mode');
    }
  }, []);

  return (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
  );
}

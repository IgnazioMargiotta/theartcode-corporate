import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

// Styles
import "../styles/globals.scss";

// Utils
import client from "@theartcode/api/apollo-client";
import { ThemeProvider } from "../contexts/ThemeContext";
import { IubendaScript } from "@theartcode/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <IubendaScript />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

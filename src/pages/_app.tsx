import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

// Styles
import "@theartcode/styles/globals.scss";

// Utils
import client from "@theartcode/api/apollo-client";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
  );
}

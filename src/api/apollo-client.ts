import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `${process.env.BE_BASE_URL}/graphql`,
  cache: new InMemoryCache()
});

export default client
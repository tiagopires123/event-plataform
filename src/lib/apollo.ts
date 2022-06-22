import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ojto8h08bs01xtc8llew8w/master',
  cache: new InMemoryCache()
})
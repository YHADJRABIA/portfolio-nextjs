import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import { isClient } from "../utilities/general"

const httpLink = new HttpLink({
  uri: `${process.env.STRAPI_API}/graphql`,
})

export const apolloClient = new ApolloClient({
  ssrMode: !isClient,
  link: httpLink,
  cache: new InMemoryCache(),
})

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { ReactNode } from "react"

interface PropsType {
  children: ReactNode
}

const StrapiApolloProvider = ({ children }: PropsType) => {
  const client = new ApolloClient({
    uri: `${process.env.STRAPI_API}/graphql`,
    cache: new InMemoryCache(),
  })

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default StrapiApolloProvider

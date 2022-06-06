import { apolloClient } from "@/lib/apolloClient"
import { ApolloProvider } from "@apollo/client"
import { ReactNode } from "react"

interface PropsType {
  children: ReactNode
}

const StrapiApolloProvider = ({ children }: PropsType) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}

export default StrapiApolloProvider

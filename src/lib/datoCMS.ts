import { GraphQLClient } from "graphql-request"

interface PropTypes {
  query: string
  variables?: unknown
  includeDrafts?: boolean
  excludeInvalid?: boolean
}

export function gqlRequest({
  query,
  variables,
  includeDrafts,
  excludeInvalid,
}: PropTypes) {
  const endpoint = "https://graphql.datocms.com"
  const token = process.env.NEXT_DATOCMS_API_TOKEN

  const headers: {
    authorization: string
    "X-Include-Drafts"?: string
    "X-Exclude-Invalid"?: string
  } = {
    authorization: `Bearer ${token}`,
  }
  if (includeDrafts) headers["X-Include-Drafts"] = "true"

  if (excludeInvalid) headers["X-Exclude-Invalid"] = "true"

  const client = new GraphQLClient(endpoint, { headers })
  return client.request(query, variables)
}

import { gql } from "@apollo/client"

export const GET_ALL_SKILLS_QUERY = gql`
  query AllSkills {
    skills(pagination: { limit: 50 }) {
      data {
        id
        attributes {
          name
          icon
          category
        }
      }
    }
  }
`

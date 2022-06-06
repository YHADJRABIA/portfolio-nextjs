import { gql } from "@apollo/client"

export const GET_ALL_SKILLS_QUERY = gql`
  query AllSkills {
    skills {
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

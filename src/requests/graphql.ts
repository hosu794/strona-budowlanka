import {gql} from  'apollo-boost'

export const GET_POSTS = gql`
{
    posts(first: 2) {
      nodes {
        content
        id
        title
      }
    }
  }`

  
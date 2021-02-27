import gql from 'graphql-tag'

export const GET_POSTS = gql`
{
    posts {
      nodes {
        content
        id
        title
      }
    }
  }`

  
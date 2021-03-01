import { DocumentNode, QueryResult, useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import React, { useState } from 'react'
import Layout from "../layout/Layout"
import { IPaginationInfo } from "../types/grapql"


const Gallery: React.FC<null> = () => {


    const [hasMore, setHasMore] = useState<boolean>(true)

    const GET_IMAGES: DocumentNode = gql` 
    query ImagesQuery($after: String) {
  mediaItems(first: 20, after: $after) {
    edges {
      node {
        id
        date
        title
        sourceUrl
        author {
          node {
            email
            nickname
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
    }
  }
}

    ` 

const {loading, data, error, fetchMore }: QueryResult<any, { after: null; }> = useQuery(GET_IMAGES, {variables: { after: null}})
    
const getMoreResults = (): void => {

    const {endCursor, hasNextPage}: IPaginationInfo = data.mediaItems.pageInfo
    
    setHasMore(hasNextPage)
    
    fetchMore({
      variables: {after: endCursor},
      updateQuery: (prevResult: any, { fetchMoreResult }: any) => {
        fetchMoreResult.mediaItems.edges = [
          ...prevResult.mediaItems.edges,
          ...fetchMoreResult.mediaItems.edges
      ]
      return fetchMoreResult
        console.log(prevResult)
        console.log(fetchMoreResult)
      }
    })

}

  return(
    <Layout>
      <h1>Gallery</h1>
    </Layout>
  )

}

export default Gallery
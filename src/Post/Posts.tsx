import { useHistory } from 'react-router-dom'
import * as H from 'history';
import React, { useState } from 'react'
import Layout from '../layout/Layout'
import { DocumentNode, gql, QueryResult, useQuery } from '@apollo/react-hooks'
import Post from './Post'
import { IPost, IPostsResult } from '../types/Post'
import { IPaginationInfo } from '../types/grapql'

const Posts: React.FC<null> = () => {

    const [hasMore, setHasMore] = useState<boolean>(true);

    const GET_POSTS: DocumentNode = gql`
    query PostsQuery($after: String) {
    posts(first: 10, after: $after) {
        edges {
        node {
            id
            content
            title
            date
            categories {
            edges {
                node {
                id
                }
            }
            }
            author {
            node {
                id
            }
            }
        }
        }
        pageInfo {
        endCursor
        hasNextPage
        }
    }
    }
    `
    const {loading, data, error, fetchMore }: QueryResult<any, { after: null; }> = useQuery(GET_POSTS, {variables: { after: null}})
    
    const getMoreResults = (): void => {

        const {endCursor, hasNextPage}: IPaginationInfo = data.posts.pageInfo
        
        setHasMore(hasNextPage)
        
        fetchMore({
          variables: {after: endCursor},
          updateQuery: (prevResult: IPostsResult, { fetchMoreResult }: any) => {
             fetchMoreResult.posts.edges = [
                 ...prevResult.posts.edges,
                 ...fetchMoreResult.posts.edges
             ]
             return fetchMoreResult
          }
        })

    }

    const history: H.History<any> = useHistory()

    const onClick = (): void => {
        history.goBack()
    }

    return (
        <Layout>
                 <div className="min-h-screen flex flex-col justify-center items-center mt-20">
                 <div className="flex flex-row space-between pb-20 pt-20 w-8/12 justify-between">
                 <h1 className="uppercase text-2xl font-extrabold" style={{
                        color: '#3559A4'
                    }}>Aktualnośći</h1>
                    <div>
                        <p className="font-extrabold text-lg cursor-pointer" onClick={onClick}>Powrót</p>
                    </div>
                 </div>
                    <div className="w-auto flex flex-col items-center w-8/12">
                        {error && <div>Error</div>}
                        {loading && <div>...Loading</div>}
                       {data && data.posts.edges.map((item: IPost) => (
                           <Post key={item.node.id} content={item.node.content} date={item.node.date} title={item.node.title} />
                       )) }
                      {hasMore && !loading ? <button className="text-xl font-bold p-7" onClick={getMoreResults}>Załaduj więcej</button> 
                      : <span className="text-2xl font-bold p-7"></span>}
                </div>
                </div>
        </Layout>
    )
}

export default Posts
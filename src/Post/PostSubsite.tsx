import { useParams } from "react-router";
import CategoryLayout from "../layout/CategoryLayout";
import { DocumentNode, gql, QueryResult, useQuery } from "@apollo/react-hooks";
import * as React from "react";
import Post from "./Post";
import PostPage from "./PostPage";

const PostSubsite: React.FC<any> = () => {
  const params = useParams<any>();

  const GET_POST_BY_ID: DocumentNode = gql`
    query getPosts($bread: ID!) {
      post(id: $bread) {
        content
        id
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
  `;

  const { loading, data, error, fetchMore }: QueryResult<any> = useQuery(
    GET_POST_BY_ID,
    {
      variables: { bread: params.id },
    }
  );

  React.useEffect(() => {
    // conso  le.log(data.post);
  }, [data, params.id]);

  return (
    <CategoryLayout title={data && data.post.title}>
      {loading && "Ładowanie..."}
      {data && (
        <div>
          <PostPage
            id={data.post.id}
            key={data.post.id}
            content={data.post.content}
            date={data.post.date}
            title={data.post.title}
          />
        </div>
      )}
    </CategoryLayout>
  );
};

export default PostSubsite;

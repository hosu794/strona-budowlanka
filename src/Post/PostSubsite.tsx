import { useParams } from "react-router";
import CategoryLayout from "../layout/CategoryLayout";
import { DocumentNode, gql, QueryResult, useQuery } from "@apollo/react-hooks";
import * as React from "react";
import Post from "./Post";
import PostPage from "./PostPage";

const PostSubsite: React.FC<any> = () => {
  const params = useParams<any>();

  const GET_POST_BY_ID: DocumentNode = gql`
    query MyQuery($bread: ID!) {
      post(id: $bread) {
        id
        content
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
    console.log(data);
  }, [data, params.id]);

  return (
    <CategoryLayout title="">
      {loading && "Ładowanie..."}
      {/* {data && (
        <div>
          <PostPage
            id={data.posts.edges[0].node.id}
            key={data.posts.edges[0].node.id}
            content={data.posts.edges[0].node.content}
            date={data.posts.edges[0].node.date}
            title={data.posts.edges[0].node.title}
          />
        </div>
      )}
       */}
      <h1>Dupa {data && data.title}</h1>
    </CategoryLayout>
  );
};

export default PostSubsite;

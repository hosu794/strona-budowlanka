import { DocumentNode, QueryResult, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { IPaginationInfo } from "../types/grapql";
import * as H from "history";
import { useHistory } from "react-router";
import { IPhoto } from "../types/Photo";
import { INodeMediaItem } from "../types/MediaItem";
import Photo from "./Photo";

const Gallery: React.FC<null> = () => {
  const history: H.History<any> = useHistory();

  const onClick = (): void => {
    history.goBack();
  };

  const [hasMore, setHasMore] = useState<boolean>(true);
  const [photos, setPhotos] = useState<IPhoto[]>([]);

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
            mediaDetails {
              height
              width
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
  `;

  const {
    loading,
    data,
    error,
    fetchMore,
  }: QueryResult<any, { after: null }> = useQuery(GET_IMAGES, {
    variables: { after: null },
  });

  useEffect(() => {
    if (data) {
      const photos: Array<IPhoto> = data.mediaItems.edges.map(
        (element: INodeMediaItem) => ({
          src: element.node.sourceUrl,
          width: element.node.mediaDetails.width,
          height: element.node.mediaDetails.height,
        })
      );

      setPhotos(photos);
    }
  }, [data]);

  const getMoreResults = (): void => {
    const {
      endCursor,
      hasNextPage,
    }: IPaginationInfo = data.mediaItems.pageInfo;

    setHasMore(hasNextPage);

    fetchMore({
      variables: { after: endCursor },
      updateQuery: (prevResult: any, { fetchMoreResult }: any) => {
        fetchMoreResult.mediaItems.edges = [
          ...prevResult.mediaItems.edges,
          ...fetchMoreResult.mediaItems.edges,
        ];
        return fetchMoreResult;
      },
    });
  };

  return (
    <Layout>
      <div className="min-h-screen flex flex-col justify-center items-center mt-20">
        <div className="flex flex-row space-between pb-20 pt-20 w-8/12 justify-between">
          <h1
            className="uppercase text-2xl font-extrabold"
            style={{
              color: "#3559A4",
            }}
          >
            Galeria
          </h1>
          <div>
            <p
              className="font-extrabold text-lg cursor-pointer"
              onClick={onClick}
            >
              Powrót
            </p>
          </div>
        </div>
        <div className="w-auto flex flex-col items-center w-8/12">
          {error && <div>Error</div>}
          {loading && <div>...Loading</div>}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {photos &&
              photos.map((item: IPhoto) => (
                <Photo src={item.src} height={item.height} width={item.width} />
              ))}
          </div>
          {hasMore && !loading ? (
            <button className="text-xl font-bold p-7" onClick={getMoreResults}>
              Załaduj więcej
            </button>
          ) : (
            <span className="text-2xl font-bold p-7"></span>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;

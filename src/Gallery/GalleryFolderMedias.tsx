import Layout from "../layout/Layout";

import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { IFolderParam } from "../types/Folder";

import axios from "axios";
import { API_SERVER } from "../constants";
import GalleryFolderMedia from "./GalleryFolderMedia";

const GalleryFolderMedias: React.FC<null> = () => {
  const params: IFolderParam = useParams();

  const [currentPage, setCurrentPage] = useState<any>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [content, setContent] = useState<any>([]);
  const [nextPage, setNextPage] = useState<number>(0);
  const [previousPage, setPreviousPage] = useState<number>(0);

  const dispatchPaginatedData = useCallback(
    (data: any): void => {
      setContent([...content, ...data.content]);
      setHasMore(data.hasMore);
      setNextPage(data.nextPage);
      setPreviousPage(data.prevPage);
      setLoading(false);
    },
    [content]
  );

  const fetchPagedMedias = useCallback(
    (page: number) => {
      axios
        .get(`${API_SERVER}wp-json/api/v1/images/${params.id}?page=${page}`)
        .then((response) => {
          return dispatchPaginatedData(response.data);
        })
        .then(() => setLoading(false))
        .catch((err) => {
          return setError(err);
        });
    },
    [dispatchPaginatedData, params.id]
  );

  useEffect(() => {
    fetchPagedMedias(currentPage);
  }, [currentPage]);

  const handleClick = () => setCurrentPage(Number(currentPage) + 1);

  return (
    <Layout>
      <div className="p-20">
        <h1>Medias {params.id}</h1>
        {loading ? <div>...Loading</div> : null}
        {content
          ? content.map((item: any, index: number) => (
              <GalleryFolderMedia guid={item.guid} ID={item.ID} key={index} />
            ))
          : null}
        {hasMore ? (
          <button onClick={handleClick}>Load More</button>
        ) : (
          "Koniec postów"
        )}
      </div>
    </Layout>
  );
};

export default GalleryFolderMedias;

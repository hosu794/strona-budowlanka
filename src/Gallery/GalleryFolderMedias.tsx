import Layout from "../layout/Layout";

import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { IFolderParam } from "../types/Folder";

import axios from "axios";
import { API_SERVER } from "../constants";
import GalleryFolderMedia from "./GalleryFolderMedia";

const GalleryFolderMedias: React.FC<null> = () => {
  const params: IFolderParam = useParams();

  const [data, setData] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(false);

  const fetchPagedMedias = useCallback(
    (page: number) => {
      axios
        .get(`${API_SERVER}wp-json/api/v1/images/${params.id}?page=${page}`)
        .then((response) => {
          console.log(response.data);
          return setData(response.data);
        })
        .then(() => setLoading(false))
        .catch((err) => {
          console.warn(err);
        });
    },
    [params.id]
  );

  useEffect(() => {
    console.log(currentPage);
    fetchPagedMedias(currentPage);
  }, [currentPage, fetchPagedMedias]);

  const getMoreResults = (): void => {
    const { currentPage: page, nextPage, pageCount, prevPage } = data;

    //Dispatch hasMore value

    setData((state: any) => (state.currentPage = state.currentPage + 1));

    fetchPagedMedias(page);
  };

  return (
    <Layout>
      <div className="p-20">
        <h1>Medias {params.id}</h1>
        {loading ? <div>...Loading</div> : null}
        {data.content
          ? data.content.map((item: any) => (
              <GalleryFolderMedia guid={item.guid} ID={item.ID} key={item.ID} />
            ))
          : null}
        <button>Load More</button>
      </div>
    </Layout>
  );
};

export default GalleryFolderMedias;

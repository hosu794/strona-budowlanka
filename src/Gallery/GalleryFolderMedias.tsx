import Layout from "../layout/Layout";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IFolderParam } from "../types/Folder";

import axios from "axios";
import { API_SERVER } from "../constants";
import { responsePathAsArray } from "graphql";
import GalleryFolderMedia from "./GalleryFolderMedia";

const GalleryFolderMedias: React.FC<null> = () => {
  const params: IFolderParam = useParams();

  const [data, setData] = useState<any>([]);
  const [medias, setMedias] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState<number>(0);
  const [prevPage, setPrevPage] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  function fetchPagedMedias(page: number) {
    console.log(page + "!!!!!");

    axios
      .get(`${API_SERVER}wp-json/api/v1/images/${params.id}?page=${page}`)
      .then((response) => {
        return setData(response.data.content);
      })
      .then(() => setLoading(false))
      .catch((err) => {
        console.warn(err);
      });
  }

  useEffect(() => {
    console.log(currentPage);
    fetchPagedMedias(currentPage);
  }, [currentPage]);

  return (
    <Layout>
      <div className="p-20">
        <h1>Medias {params.id}</h1>
        {loading ? <div>...Loading</div> : null}
        {data
          ? data.map((item: any) => (
              <GalleryFolderMedia guid={item.guid} ID={item.ID} key={item.ID} />
            ))
          : null}
      </div>
    </Layout>
  );
};

export default GalleryFolderMedias;

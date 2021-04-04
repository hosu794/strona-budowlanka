import Layout from "../layout/Layout";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { IFolderParam } from "../types/Folder";

const GalleryFolderMedias: React.FC<null> = () => {
  const params: IFolderParam = useParams();

  return (
    <Layout>
      <div className="p-20">
        <h1>Medias {params.id}</h1>
      </div>
    </Layout>
  );
};

export default GalleryFolderMedias;

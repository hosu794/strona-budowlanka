import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { API_SERVER } from "../constants";

type GalleryFolderMediaTitleProps = {
  id: string | undefined;
};

const GalleryFolderMediaTitle: React.FC<GalleryFolderMediaTitleProps> = ({
  id,
}) => {
  const [title, setTitle] = useState("");

  const dispatchResponse = (data: any): void => {
    setTitle(data.name);
  };

  const fetchCurrentFolderName = useCallback((id: string | undefined) => {
    const token = "lW3vC2c6Pe0u4haQK6En1h1OX7DEwPot5CsREdLC";

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get(
        `http://serwer2124775.home.pl/wp-json/filebird/public/v1/folder/?folder_id=${id}`,
        config
      )
      .then((response) => {
        return dispatchResponse(response.data.data.folder);
      })
      .catch((error: any) => {
        console.warn(error);
      });
  }, []);

  useEffect(() => {
    fetchCurrentFolderName(id);
  }, [fetchCurrentFolderName, id]);

  return (
    <React.Fragment>
      <h1 className="pt-20 text-2xl">{title && title}</h1>
    </React.Fragment>
  );
};

export default GalleryFolderMediaTitle;

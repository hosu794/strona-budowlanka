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
    console.log(data.name);
    setTitle(data.name);
  };

  const fetchCurrentFolderName = useCallback((id: string | undefined) => {
    axios
      .get(`${API_SERVER}/wp-json/api/v1/folders/${id}`)

      .then((response) => {
        return dispatchResponse(response.data);
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
      <h1 className="pt-10">{title && title}</h1>
    </React.Fragment>
  );
};

export default GalleryFolderMediaTitle;

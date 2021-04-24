import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { API_SERVER } from "../constants";
import { GalleryFolderProps } from "../types/MediaItem";

const GalleryFolderTitle: React.FC<GalleryFolderProps> = ({ folderId }) => {
  const [name, setName] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  const dispatchData = useCallback((data: any) => {
    setName(data[0].name);
  }, []);

  const fetchGalleryFolder = useCallback(
    (id: string | undefined) => {
      console.log("Fetched...");

      setLoading(true);

      axios
        .get(`${API_SERVER}wp-json/api/v1/folders/${folderId}`)

        .then((response: any) => {
          return dispatchData(response.data);
        })
        .then(() => {
          setLoading(false);
        })
        .catch((error: any) => {
          console.log(error);
          return setLoading(false);
        });
    },
    [dispatchData, folderId]
  );

  useEffect(() => {
    console.log("Start loading...");

    fetchGalleryFolder(folderId);
  }, [fetchGalleryFolder, folderId]);

  return (
    <React.Fragment>
      <h1>
        {!loading ? (
          <div>
            <h1 className="font-bold text-3xl">{name}</h1>
          </div>
        ) : (
          "Pending"
        )}
      </h1>
    </React.Fragment>
  );
};

export default GalleryFolderTitle;

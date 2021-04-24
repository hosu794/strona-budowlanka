import React from "react";

import { IMediaItem } from "../types/MediaItem";

const GalleryFolderMedia: React.FC<IMediaItem> = ({ ID, guid }) => {
  return (
    <React.Fragment>
      <img
        src={guid}
        className="object-contain h-52 w-full sm:w-1/2 md:w-1/5 p-1"
        alt=""
      />
    </React.Fragment>
  );
};

export default GalleryFolderMedia;

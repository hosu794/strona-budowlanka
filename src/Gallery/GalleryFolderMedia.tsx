import React from "react";

import axios from "axios";
import { IMediaItem } from "../types/MediaItem";

const GalleryFolderMedia: React.FC<IMediaItem> = ({ ID, guid }) => {
  return (
    <React.Fragment>
      <h1>Image id: {ID}</h1>
      <img src={guid} alt="" />
    </React.Fragment>
  );
};

export default GalleryFolderMedia;

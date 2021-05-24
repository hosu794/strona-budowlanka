import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_SERVER } from "../constants";
import { FolderProps } from "../types/Folder";
import { IMediaPagedResponseItem } from "../types/MediaItem";

const GalleryFolder: React.FC<FolderProps> = ({ title, owner, id }) => {
  const linkToImages = `/gallery/folder/${id}`;

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<IMediaPagedResponseItem>();

  const getFirstElelemt = useCallback(() => {
    axios
      .get(`${API_SERVER}wp-json/api/v1/images/${id}?page=0`)
      .then((response) => {
        return setData(response.data.content[0]);
      })
      .then(() => {
        return setLoading(false);
      })
      .then(() => setLoading(false))
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  useEffect(() => {
    getFirstElelemt();
  }, [getFirstElelemt]);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full md:w-1/2 m-5">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold ">
            {loading && "Ładowanie..."}
            {data && (
              <div>
                <Link to={linkToImages}>
                  <h1
                    className="text-xl"
                    style={{
                      color: "#3559A4",
                    }}
                  >
                    {title}
                  </h1>
                  <img src={data.guid} alt="Zdjęcie katalogu" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryFolder;

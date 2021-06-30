import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_SERVER } from "../constants";
import { FolderProps } from "../types/Folder";
import { IMediaPagedResponseItem } from "../types/MediaItem";

const GalleryFolder: React.FC<FolderProps> = ({
  title,
  folderChildren,
  id,
  attachemntsCount,
}) => {
  const linkToImages = `/gallery/folder/${id}`;

  // const [loading, setLoading] = useState<boolean>(true);
  // const [data, setData] = useState<IMediaPagedResponseItem>();

  // const getFirstElelemt = useCallback(() => {
  //   axios
  //     .get(`${API_SERVER}wp-json/api/v1/attachments/${id}?page=0`)
  //     .then((response) => {
  //       console.log(response.data);
  //       return setData(response.data.content[0]);
  //     })
  //     .then(() => {
  //       return setLoading(false);
  //     })
  //     .then(() => setLoading(false))
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, [id]);

  useEffect(() => {
    console.log("Folder count... ", folderChildren.length);
    if (attachemntsCount > 0) {
      // getFirstElelemt();
    }
  }, [attachemntsCount]);

  return (
    <div className="bg-white rounded-xl overflow-hidden w-full">
      <div className="md:flex">
        <div className="p-2">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold ">
            {/* {loading && "Ładowanie..."} */}

            {folderChildren.length > 0 && title ? (
              <div>
                <div className="flex flex-row">
                  <h1
                    className="text-xl p-4"
                    style={{
                      color: "#3559A4",
                    }}
                  >
                    {title}
                  </h1>
                </div>
                <p className="ml-10">Brak zdjęć </p>
              </div>
            ) : (
              <div>
                <Link to={linkToImages}>
                  <div className="flex flex-row">
                    <h1
                      className="text-xl p-4"
                      style={{
                        color: "#3559A4",
                      }}
                    >
                      {title}
                    </h1>
                  </div>
                </Link>
              </div>
            )}
            {folderChildren &&
              folderChildren.map((item: any) => (
                <GalleryFolder
                  title={item.text}
                  key={item.id}
                  id={item.id}
                  attachemntsCount={Object.values(item.li_attr)[1]}
                  folderChildren={item.children}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryFolder;

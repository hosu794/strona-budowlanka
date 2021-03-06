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

  const [toggle, setToggle] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(true);
  const [image, setImage] = useState<string>();

  const fetchPagedMedias = useCallback(() => {
    axios
      .get(`${API_SERVER}wp-json/api/v1/attachments/${id}?page=0`)
      .then((response) => {
        console.log(response.data.content[0].guid);
        setImage(response.data.content[0].guid);
      })
      .then(() => setLoading(false))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    fetchPagedMedias();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  // useEffect(() => {
  //   getFirstElelemt();
  // }, []);

  const handleClick = () => {
    setToggle(!toggle);
  };

  //bg-white rounded-xl shadow-md overflow-hidden w-full md:w-1/2 m-5
  return (
    <div className="bg-transparent rounded-xl overflow-hidden w-full">
      <div className="md:flex">
        <div className="p-2">
          <div className="bg-transparent uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {/* {loading && "Ładowanie..."} */}

            {folderChildren.length > 0 && title ? (
              <div
                onClick={handleClick}
                className="cursor-pointer shadow-md rounded-md break-all bg-white"
              >
                <div className="flex flex-row">
                  <h1
                    className="text-sm md:text-2xl p-4"
                    style={{
                      color: "#3559A4",
                    }}
                  >
                    {title}
                  </h1>
                </div>
              </div>
            ) : (
              <div className="cursor-pointer shadow-md rounded-md break-all bg-white">
                <Link to={linkToImages}>
                  <div className="flex flex-row">
                    <div className="p-10">
                      <img
                        src={image}
                        alt="first"
                        height="100px"
                        width="100px"
                      />
                    </div>
                    <div className="flex flex-row">
                      <h1
                        className="text-sm md:text-2xl p-4"
                        style={{
                          color: "#3559A4",
                        }}
                      >
                        {title}
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
            )}
            <div className="ml-5 mt-1">
              {folderChildren && toggle
                ? folderChildren.map((item: any) => (
                    <GalleryFolder
                      title={item.text}
                      key={item.id}
                      id={item.id}
                      attachemntsCount={Object.values(item.li_attr)[1]}
                      folderChildren={item.children}
                    />
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryFolder;

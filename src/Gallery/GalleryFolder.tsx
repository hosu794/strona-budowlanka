import { Link } from "react-router-dom";
import { FolderProps } from "../types/Folder";

const GalleryFolder: React.FC<FolderProps> = ({ title, owner, id }) => {
  const linkToImages = `/gallery/folder/${id}`;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full md:w-1/2 m-5">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold ">
            <h1
              className="text-xl"
              style={{
                color: "#3559A4",
              }}
            >
              <Link to={linkToImages}>{title}</Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryFolder;

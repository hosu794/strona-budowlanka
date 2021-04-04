import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import { FolderProps } from "../types/Folder";

const GalleryFolder: React.FC<FolderProps> = ({ title, owner, id }) => {
  const linkToImages = `/gallery/folder/${id}`;

  return (
    <div>
      <h1>Tytuł: {title}</h1>
      <p>Id: {id}</p>
      <p>Twórca {owner}</p>
      <button>
        <Link to={linkToImages}>Go to images</Link>
      </button>
    </div>
  );
};

export default GalleryFolder;

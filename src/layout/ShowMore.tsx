import * as React from "react";
import { Link } from "react-router-dom";

type ShowMoreProps = {
  length?: number;
  content: string;
  link: string;
};

const ShowMore = ({ length = 300, content, link }: ShowMoreProps) => {
  return (
    <React.Fragment>
      <div
        className="flex items-center flex-col break-all"
        dangerouslySetInnerHTML={{
          __html: `${content.slice(0, length)}...`,
        }}
      ></div>
      <Link to={link}>
        <button className="font-bold">Czytaj dalej</button>
      </Link>
    </React.Fragment>
  );
};

export default ShowMore;

import * as React from "react";
import { Link } from "react-router-dom";

type ShowMoreProps = {
  length?: number;
  content: string;
  link: string;
};

const ShowMore = ({ length = 700, content, link }: ShowMoreProps) => {
  const cutedImage: any = content.match(/<img .*?>/g);
  const replaced: any = content.replace(/<img .*?>/g, "");

  const newString: string =
    cutedImage === null ? content : cutedImage + replaced;

  const slicedString: string = `${newString.slice(0, length)}...`;

  return (
    <React.Fragment>
      <div
        className="flex items-center flex-col break-all"
        dangerouslySetInnerHTML={{
          __html: slicedString,
        }}
      ></div>
      <Link to={link}>
        <button className="font-bold">Czytaj dalej</button>
      </Link>
    </React.Fragment>
  );
};

export default ShowMore;

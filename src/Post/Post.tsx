import * as React from "react";
import useDateFormat from "../hooks/useDateFormat";
import ShowMore from "../layout/ShowMore";

type PostProp = {
  title: string;
  content: string;
  date: string;
};

const Post: React.FC<PostProp> = ({ title, content, date }) => {
  const [toggle, setToggle] = React.useState<boolean>(false);

  const onClick = (): void => {
    setToggle(!toggle);
  };

  return (
    <div className="p-5">
      <div className="flex flex-col pb-3">
        <h1 className="font-bold text-2xl">{title}</h1>
        <span className="font-semibold text-lg">({useDateFormat(date)})</span>
      </div>
      <ShowMore content={content} showMore={toggle} />
      <button className="font-bold" onClick={onClick}>
        {toggle ? "Pokaz mniej" : "Pokaz wiecej"}
      </button>
    </div>
  );
};

export default Post;

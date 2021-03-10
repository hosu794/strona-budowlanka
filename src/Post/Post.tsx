import * as React from "react";
import useDateFormat from "../hooks/useDateFormat";

type PostProp = {
  title: string;
  content: string;
  date: string;
};

const Post: React.FC<PostProp> = ({ title, content, date }) => {
  return (
    <div className="p-5">
      <div className="flex flex-col pb-3">
        <h1 className="font-bold text-2xl">{title}</h1>
        <span className="font-semibold text-lg">({useDateFormat(date)})</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};

export default Post;

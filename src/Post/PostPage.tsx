import * as React from "react";
import { useEffect } from "react";

const PostPage: React.FC<any> = ({ id, content, title, date }) => {
  useEffect(() => {
    console.log(content);
  }, []);

  return (
    <React.Fragment>
      {/* <h1 className="text-2xl pb-4">{title}</h1> */}
      <div
        className="flex items-center flex-col  p-5"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></div>
    </React.Fragment>
  );
};

export default PostPage;

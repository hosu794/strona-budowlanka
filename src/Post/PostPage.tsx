import * as React from "react";

const PostPage: React.FC<any> = ({ id, content, title, date }) => {
  return (
    <React.Fragment>
      <h1 className="text-2xl pb-4"> {title}</h1>
      <div
        className="flex items-center flex-col break-all p-5"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></div>
    </React.Fragment>
  );
};

export default PostPage;

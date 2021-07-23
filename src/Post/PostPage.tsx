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

type ShowMoreProps = {
  length?: number;
  content: string;
  showMore: boolean;
};

const ShowMore = ({ showMore, length = 300, content }: ShowMoreProps) => {
  return (
    <React.Fragment>
      <div
        className="flex items-center flex-col break-all"
        dangerouslySetInnerHTML={{
          __html: showMore ? content : `${content.slice(0, length)}...`,
        }}
      ></div>
    </React.Fragment>
  );
};

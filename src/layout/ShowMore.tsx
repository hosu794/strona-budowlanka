import * as React from "react";

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

export default ShowMore;

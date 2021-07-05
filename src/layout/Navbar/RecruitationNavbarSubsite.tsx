import * as React from "react";

import { Link } from "react-router-dom";

type NavbarSubsiteItemProps = {
  post_title: string;
  id: string;
};

const RecruitationNavbarSubsite: React.FC<NavbarSubsiteItemProps> = ({
  post_title,
  id,
}: any) => {
  const link = `/recruitation/subsite/${id}`;

  if (post_title === "Proces Rekrutacji") {
    return <div></div>;
  } else {
    return (
      <div className="p-2">
        <Link className="link-none" to={link}>
          <p className=" text-white">{post_title}</p>
        </Link>
      </div>
    );
  }
};

export default RecruitationNavbarSubsite;

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

  return (
    <div className="p-2 text-white">
      <Link to={link}>
        <p>{post_title}</p>
      </Link>
    </div>
  );
};

export default RecruitationNavbarSubsite;

import * as React from "react";

import { Link } from "react-router-dom";

type NavbarSubsiteItemProps = {
  post_title: string;
  id: string;
};

const RecruitationProceduresNavbarSubsite: React.FC<NavbarSubsiteItemProps> = ({
  post_title,
  id,
}: any) => {
  const link = `/recruitation/procedures/subsite/${id}`;

  return (
    <div className="p-2 text-white hover:text-gray-200">
      <Link className="link-none mb-0" to={link}>
        <p className="font-normal hover:font-extrabold mb-0">{post_title}</p>
      </Link>
    </div>
  );
};

export default RecruitationProceduresNavbarSubsite;

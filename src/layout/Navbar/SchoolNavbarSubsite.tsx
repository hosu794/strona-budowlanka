import * as React from "react";

import { Link } from "react-router-dom";

type NavbarSubsiteItemProps = {
  post_title: string;
  id: string;
};

const SchoolNavbarSubsite: React.FC<NavbarSubsiteItemProps> = ({
  post_title,
  id,
}: any) => {
  const link = `/school/subsite/${id}`;

  return (
    <div className="p-2">
      <Link to={link}>
        <p className="uppercase">{post_title}</p>
      </Link>
    </div>
  );
};

export default SchoolNavbarSubsite;
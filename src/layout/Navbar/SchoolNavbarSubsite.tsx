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
  const link = `/subsite/${id}`;

  return (
    <Link to={link}>
      <p>{post_title}</p>
    </Link>
  );
};

export default SchoolNavbarSubsite;

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

  if (post_title === "Procedury") {
    return <div></div>;
  } else {
    return (
      <div className="p-2">
        <Link className="link-none" to={link}>
          <p className="text-white hover:text-gray-200">{post_title}</p>
        </Link>
      </div>
    );
  }
};

export default SchoolNavbarSubsite;

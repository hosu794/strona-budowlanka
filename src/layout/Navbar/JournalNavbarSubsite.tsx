import * as React from "react";

import { Link } from "react-router-dom";

type NavbarSubsiteItemProps = {
  post_title: string;
  id: string;
};

const JournalNavbarSubsite: React.FC<NavbarSubsiteItemProps> = ({
  post_title,
  id,
}: any) => {
  const link = `/journal/subsite/${id}`;

  return (
    <div className="p-2 text-white hover:text-gray-200">
      <Link className="link-none" to={link}>
        <span className="">{post_title}</span>
      </Link>
    </div>
  );
};

export default JournalNavbarSubsite;

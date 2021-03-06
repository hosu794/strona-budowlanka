import * as React from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";

type NavbarSubsiteItemProps = {
  post_title: string;
  id: string;
};

const ProcedureNavbarSubsite: React.FC<NavbarSubsiteItemProps> = ({
  post_title,
  id,
}: any) => {
  const link = `/procedure/subsite/${id}`;

  useEffect(() => {
    console.log(link);
  }, [link]);

  return (
    <div
      className="p-2 text-white hover:text-gray-200"
      style={{
        marginBottom: "0",
      }}
    >
      <Link className="link-none" to={link}>
        <p className="font-normal mb-0">{post_title}</p>
      </Link>
    </div>
  );
};

export default ProcedureNavbarSubsite;

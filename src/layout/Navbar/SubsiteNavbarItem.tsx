import * as React from "react";
import { Link } from "react-router-dom";

const SubsiteNavbarItem = ({ item, params }: any) => {
  const link = `/subsite/${item.ID}/${params.category}`;

  const isCurrentPage =
    params.id === item.ID
      ? "font-bold block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white text-white mr-4"
      : "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white text-white mr-4";

  return (
    <Link to={link}>
      <button className={isCurrentPage}>{item.post_title}</button>
    </Link>
  );
};

export default SubsiteNavbarItem;

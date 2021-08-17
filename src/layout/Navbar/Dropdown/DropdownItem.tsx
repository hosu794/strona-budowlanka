import * as React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const DropdownItem = ({ item, link }: any) => {
  useEffect(() => {
    console.log(item.ID);
  }, [item]);

  const redirectLink = `/${link}/${item.ID}`;

  return (
    <div className="p-2 text-white hover:text-gray-200">
      <Link className="link-none mb-0" to={redirectLink}>
        <p className="font-normal hover:font-extrabold mb-0">
          {item.post_title}
        </p>
      </Link>
    </div>
  );
};

export default DropdownItem;

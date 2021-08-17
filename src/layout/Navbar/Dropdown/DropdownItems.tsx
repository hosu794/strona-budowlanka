import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import DropdownItem from "./DropdownItem";

const DropdownItems = ({ item, link }: any) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="pb-4">
      <h1
        className="text-white hover:text-gray-200 cursor-pointer mb-0"
        onClick={onToggle}
      >
        {item.category.name}
        <i className="ml-1 fas fa-scroll"></i>
      </h1>
      {item.content &&
        toggle &&
        item.content.map((i: any) => {
          return <DropdownItem item={i} link={link} />;
        })}
    </div>
  );
};

export default DropdownItems;

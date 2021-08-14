import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import DropdownItem from "./DropdownItem";

const DropdownItems = ({ item }: any) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <React.Fragment>
      <h1 onClick={onToggle}>{item.category.name}</h1>
      {item.content &&
        toggle &&
        item.content.map((i: any) => {
          return <DropdownItem item={i} />;
        })}
    </React.Fragment>
  );
};

export default DropdownItems;

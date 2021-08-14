import * as React from "react";
import { useEffect } from "react";

const DropdownItem = (item: any) => {
  useEffect(() => {
    console.log(item.item.post_title);
  }, [item]);

  return (
    <div>
      <h2>{item.item.post_title}</h2>
    </div>
  );
};

export default DropdownItem;

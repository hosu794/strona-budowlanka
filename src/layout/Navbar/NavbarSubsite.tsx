import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ItemType } from "../../types/Subsite";

type NavbarSubsiteProps = {
  item: ItemType;
};

const NavbarSubsite: React.FC<NavbarSubsiteProps> = ({ item }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="p-4">
      <h1
        className="font-bold cursor-pointer"
        style={{
          maxWidth: "300px",
        }}
        onClick={onToggle}
      >
        {item.category.name}
      </h1>
      {item &&
        toggle &&
        item.content.map((i: any) => (
          <NavbarSubsiteItem
            categoryId={item.category.term_id}
            post_title={i.post_title}
            id={i.ID}
            key={i.ID}
          />
        ))}
    </div>
  );
};

export default NavbarSubsite;
type NavbarSubsiteItemProps = {
  post_title: string;
  id: string;
  categoryId: string;
};

const NavbarSubsiteItem: React.FC<NavbarSubsiteItemProps> = ({
  post_title,
  id,
  categoryId,
}: any) => {
  const link = `/subsite/${id}/${categoryId}`;

  return (
    <Link className="link-none" to={link}>
      <p
        style={{
          marginBottom: "0",
        }}
        className="text-white font-normal hover:text-gray-200"
      >
        {post_title}
      </p>
    </Link>
  );
};

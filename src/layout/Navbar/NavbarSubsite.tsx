import * as React from "react";
import { Link } from "react-router-dom";
import { ItemType } from "../../types/Subsite";

type NavbarSubsiteProps = {
  item: ItemType;
};

const NavbarSubsite: React.FC<NavbarSubsiteProps> = ({ item }) => {
  return (
    <div className="p-4">
      <h1
        className="font-bold"
        style={{
          maxWidth: "300px",
        }}
      >
        {item.category.name}
      </h1>
      {item &&
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
      <p className="text-white hover:text-gray-200">{post_title}</p>
    </Link>
  );
};

import * as React from "react";
import { Link } from "react-router-dom";
import { ItemType } from "../../types/Subsite";

type NavbarSubsiteMobileProps = {
  item: ItemType;
};

const NavbarSubsiteMobile: React.FC<NavbarSubsiteMobileProps> = ({ item }) => {
  return (
    <div className="p-4">
      <h1 className="font-extrabold">{item.category.name}</h1>
      {item &&
        item.content.map((i: any) => (
          <NavbarSubsiteItem
            categoryId={item.category.term_id}
            post_title={i.post_title}
            id={i.ID}
          />
        ))}
    </div>
  );
};

export default NavbarSubsiteMobile;

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
      <p className="font-normal">{post_title}</p>
    </Link>
  );
};

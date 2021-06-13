import axios from "axios";
import * as React from "react";
import { Link } from "react-router-dom";
import { API_SERVER } from "../../constants";

type NavbarSubsiteProps = {
  item: any;
};

const NavbarSubsite: React.FC<NavbarSubsiteProps> = ({ item }) => {
  return (
    <div className="p-4">
      <h1 className="font-bold">{item.category.name}</h1>
      {item &&
        item.content.map((i: any) => (
          <NavbarSubsiteItem
            categoryId={item.category.term_id}
            post_title={i.post_title}
            id={i.ID}
            key={i.ID}
          />
        ))}
      {/* {loading && <div>Ładowanie...</div>} */}
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
    <Link to={link}>
      <p>{post_title}</p>
    </Link>
  );
};

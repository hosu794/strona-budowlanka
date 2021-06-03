import * as React from "react";
import axios from "axios";
import { API_SERVER } from "../../constants";
import { Link } from "react-router-dom";
import { ISubsite } from "../../types/Subsite";

type NavbarSubsiteMobileProps = {
  name: string;
  id: string;
};

const NavbarSubsiteMobile: React.FC<NavbarSubsiteMobileProps> = ({
  name,
  id,
}) => {
  const [subsites, setSubsites] = React.useState<Array<ISubsite>>();
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchSubsites = React.useCallback(() => {
    axios
      .get(`${API_SERVER}wp-json/api/v1/subsites/${id}`)
      .then((response) => {
        setSubsites(response.data);
      })
      .then(() => {
        return setLoading(false);
      });
  }, [id]);

  React.useEffect(() => {
    fetchSubsites();
  }, [fetchSubsites]);

  return (
    <div className="p-4">
      <h1 className="font-extrabold">{name}</h1>
      {subsites &&
        subsites.map((item: ISubsite) => (
          <NavbarSubsiteItem
            categoryId={id}
            post_title={item.post_title}
            id={item.ID}
          />
        ))}
      {loading && <div>Loading...</div>}
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
    <Link to={link}>
      <p className="font-normal">{post_title}</p>
    </Link>
  );
};

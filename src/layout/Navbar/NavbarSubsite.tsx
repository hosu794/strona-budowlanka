import axios from "axios";
import * as React from "react";
import { Link } from "react-router-dom";
import { API_SERVER } from "../../constants";

type NavbarSubsiteProps = {
  name: string;
  id: string;
};

const NavbarSubsite: React.FC<NavbarSubsiteProps> = ({ name, id }) => {
  const [subsites, setSubsites] = React.useState<any>();
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchSubsites = React.useCallback(() => {
    axios
      .get(`${API_SERVER}wp-json/api/v1/subsites/${id}`)
      .then((response) => {
        console.log(response.data);
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
      <h1 className="font-bold">{name}</h1>
      {subsites &&
        subsites.map((item: any) => (
          <NavbarSubsiteItem
            categoryId={id}
            post_title={item.post_title}
            id={item.ID}
            key={item.ID}
          />
        ))}
      {loading && <div>Loading...</div>}
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

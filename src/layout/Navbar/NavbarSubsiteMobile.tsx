import * as React from "react";
import axios from "axios";
import { API_SERVER } from "../../constants";
import { Link } from "react-router-dom";

const NavbarSubsiteMobile = ({ name, id }: any) => {
  const [subsites, setSubsites] = React.useState<any>();
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
        subsites.map((item: any) => (
          <NavbarSubsiteItem
            item={item}
            post_title={item.post_title}
            id={item.ID}
          />
        ))}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default NavbarSubsiteMobile;

const NavbarSubsiteItem = ({ post_title, id, item }: any) => {
  const link = `/subsite/${id}`;

  return (
    <Link to={link}>
      <p className="font-normal">{post_title}</p>
    </Link>
  );
};

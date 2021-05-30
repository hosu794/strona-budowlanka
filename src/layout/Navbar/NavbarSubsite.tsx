import axios from "axios";
import * as React from "react";
import { Link } from "react-router-dom";
import { API_SERVER } from "../../constants";

const NavbarSubsite = ({ name, id }: any) => {
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
            item={item}
            post_title={item.post_title}
            id={item.ID}
          />
        ))}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default NavbarSubsite;

const NavbarSubsiteItem = ({ post_title, id, item }: any) => {
  const link = `/subsite/${id}`;

  return (
    <Link to={link}>
      <p>{post_title}</p>
    </Link>
  );
};

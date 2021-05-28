import axios from "axios";
import * as React from "react";
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
      .then((response: any) => {
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
        subsites.map((item: any) => {
          return <p>{item.post_title}</p>;
        })}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default NavbarSubsite;

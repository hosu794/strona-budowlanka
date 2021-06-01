import * as React from "react";
import { useParams } from "react-router";
import { IFolderParam } from "../../types/Folder";
import CategoryLayout from "../CategoryLayout";

import axios from "axios";
import { API_SERVER } from "../../constants";
import SubsiteLayout from "../SubsiteLayout";

const Subsite = () => {
  const [subsite, setSubsite] = React.useState<any>({});

  const params: IFolderParam = useParams();

  const fetchSubsite = React.useCallback(() => {
    console.log("Params: ", params);

    axios
      .get(`${API_SERVER}wp-json/api/v1/subsite/${params.id}`)
      .then((response) => {
        setSubsite(response.data[0]);
        console.log(response.data[0]);
      });
  }, [params.id]);

  React.useEffect(() => {
    fetchSubsite();
  }, [fetchSubsite]);

  return (
    <SubsiteLayout title={subsite && subsite.post_title}>
      <h1>Subsite</h1>
      {subsite && (
        <div
          className="content mb-10"
          dangerouslySetInnerHTML={{ __html: subsite.post_content }}
        ></div>
      )}
    </SubsiteLayout>
  );
};

export default Subsite;

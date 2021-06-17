import * as React from "react";
import { useParams } from "react-router";
import { IFolderParam } from "../../types/Folder";

import axios from "axios";
import { API_SERVER } from "../../constants";
import SubsiteLayout from "../SubsiteLayout";
import CategoryLayout from "../CategoryLayout";

const SchoolSubsite = () => {
  const [subsite, setSubsite] = React.useState<any>({});

  const params: IFolderParam = useParams();

  const fetchSubsite = React.useCallback(() => {
    axios
      .get(`${API_SERVER}wp-json/api/v1/subsite/${params.id}`)
      .then((response) => {
        console.log(response.data);
        setSubsite(response.data);
      });
  }, [params]);

  React.useEffect(() => {
    console.log(params);
    fetchSubsite();
  }, [fetchSubsite]);

  return (
    <CategoryLayout title="Subsite">
      {subsite && (
        <div
          className="content mb-10"
          dangerouslySetInnerHTML={{ __html: subsite.post_content }}
        ></div>
      )}
    </CategoryLayout>
  );
};

export default SchoolSubsite;

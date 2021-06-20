import * as React from "react";
import { useParams } from "react-router";
import { IFolderParam } from "../../types/Folder";

import axios from "axios";
import { API_SERVER } from "../../constants";
import SubsiteLayout from "../SubsiteLayout";
import CategoryLayout from "../CategoryLayout";

const ContactSubsite = () => {
  const [subsite, setSubsite] = React.useState<any>({});

  const params: IFolderParam = useParams();

  const fetchSubsite = React.useCallback(() => {
    axios
      .get(`${API_SERVER}wp-json/api/v1/contact/subsite/${params.id}`)
      .then((response) => {
        return setSubsite(response.data[0]);
      });
  }, [params]);

  React.useEffect(() => {
    console.log(params);
    fetchSubsite();
  }, [fetchSubsite, params]);

  return (
    <CategoryLayout title={subsite && subsite.post_title}>
      {subsite && (
        <div
          className="content mb-10"
          dangerouslySetInnerHTML={{ __html: subsite.post_content }}
        ></div>
      )}
    </CategoryLayout>
  );
};

export default ContactSubsite;

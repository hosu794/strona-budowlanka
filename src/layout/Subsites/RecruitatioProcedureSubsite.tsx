import * as React from "react";
import { useParams } from "react-router";
import { IFolderParam } from "../../types/Folder";

import axios from "axios";
import { API_SERVER } from "../../constants";
import SubsiteLayout from "../SubsiteLayout";
import CategoryLayout from "../CategoryLayout";
import { useHistory } from "react-router-dom";

const RecruitationProcedureSubsite = () => {
  const [subsite, setSubsite] = React.useState<any>({});

  const params: IFolderParam = useParams();

  const history = useHistory();

  const fetchSubsite = React.useCallback(() => {
    axios
      .get(
        `${API_SERVER}wp-json/api/v1/recruitation/procedures/subsite/${params.id}`
      )
      .then((response) => {
        const content: string = response.data[0].post_content;

        if (content.substring(0, 4) === "http") {
          window.open(content, "_blank");
          history.goBack();
        }

        return setSubsite(response.data[0]);
      });
  }, [params]);

  React.useEffect(() => {
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

export default RecruitationProcedureSubsite;

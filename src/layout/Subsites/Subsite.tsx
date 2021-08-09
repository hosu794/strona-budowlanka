import * as React from "react";
import { useParams } from "react-router";
import { IFolderParam } from "../../types/Folder";

import axios from "axios";
import { API_SERVER } from "../../constants";
import SubsiteLayout from "../SubsiteLayout";
import { useHistory } from "react-router-dom";
import CategoryLayout from "../CategoryLayout";
import PostPage from "../../Post/PostPage";

const Subsite = () => {
  const [subsite, setSubsite] = React.useState<any>({});

  const params: IFolderParam = useParams();

  const history = useHistory();

  const fetchSubsite = React.useCallback(() => {
    axios
      .get(`${API_SERVER}wp-json/api/v1/subsite/${params.id}`)
      .then((response) => {
        const content: string = response.data[0].post_content;

        console.log("Response: ", response.data[0]);

        if (content.substring(0, 7) === "<p>http") {
          const cleanContent: string = content.replace(/<[^>]*>?/gm, "");
          window.open(cleanContent, "_blank");
          history.goBack();
        }

        setSubsite(response.data[0]);
      });
  }, [params]);

  React.useEffect(() => {
    fetchSubsite();
    console.log("Additional Subsites content: ", subsite);
  }, [fetchSubsite]);

  return (
    <SubsiteLayout title="">
      {subsite && (
        <div>
          <PostPage
            id={subsite.id}
            key={subsite.id}
            content={subsite.post_content}
            date={subsite.date}
            title={subsite.post_title}
          />
        </div>
      )}
    </SubsiteLayout>
  );
};

export default Subsite;

import * as React from "react";
import { useParams } from "react-router";
import axios from "axios";
import { IFolderParam } from "../../../types/Folder";
import { useHistory } from "react-router-dom";
import { API_SERVER } from "../../../constants";
import SubsiteLayout from "../../SubsiteLayout";
import PostPage from "../../../Post/PostPage";
import Layout from "../../Layout";
import CategoryLayout from "../../CategoryLayout";

const DropdownSchoolSubsite = () => {
  const [subsite, setSubsite] = React.useState<any>({});

  const params: IFolderParam = useParams();

  const history = useHistory();

  const fetchSubsite = React.useCallback(() => {
    axios
      .get(`${API_SERVER}wp-json/api/v1/dropdown/school/subsite/${params.id}`)
      .then((response) => {
        setSubsite(response.data[0]);
      });
  }, [params]);

  React.useEffect(() => {
    fetchSubsite();
    console.log("Contact Dropdown Subsites content: ", subsite);
  }, [fetchSubsite]);

  return (
    <CategoryLayout title="">
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
    </CategoryLayout>
  );
};

export default DropdownSchoolSubsite;

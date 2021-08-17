import * as React from "react";

import axios from "axios";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { API_SERVER } from "../../../constants";
import DropdownItem from "./DropdownItems";

const DropdownSchoolNavbar = () => {
  const [data, setData] = useState<any>();

  const fetchRecruitationDropdown = useCallback(() => {
    axios
      .get(`${API_SERVER}wp-json/api/v1/dropdown/school/subsites`)
      .then((response: any) => {
        console.log("Dropdown: ", response.data);
        return setData(response.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchRecruitationDropdown();
  }, [fetchRecruitationDropdown]);

  return (
    <React.Fragment>
      {data &&
        data.map((item: any) => {
          return <DropdownItem link="dropdown/school" item={item} />;
        })}
    </React.Fragment>
  );
};

export default DropdownSchoolNavbar;

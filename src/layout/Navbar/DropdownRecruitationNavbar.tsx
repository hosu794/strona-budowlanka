import * as React from "react";

import axios from "axios";
import { useState } from "react";
import { useCallback } from "react";
import { API_SERVER } from "../../constants";
import { useEffect } from "react";

const DropdownRecruitationNavbar = () => {
  const [data, setData] = useState<any>();

  const fetchRecruitationDropdown = useCallback(() => {
    axios
      .get(`${API_SERVER}wp-json/api/v1/dropdown/recruitation/subsites`)
      .then((response: any) => {
        console.log("Dropdown: ", response.data);
      });
  }, []);

  useEffect(() => {
    fetchRecruitationDropdown();
  }, [fetchRecruitationDropdown]);

  return (
    <React.Fragment>
      <div>Some text</div>
    </React.Fragment>
  );
};

export default DropdownRecruitationNavbar;

import * as React from "react";

import axios from "axios";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { API_SERVER } from "../../../constants";
import DropdownItem from "./DropdownItems";

const DropdownContactNavbar = () => {
  const [data, setData] = useState<any>();

  const fetchRecruitationDropdown = useCallback(() => {
    axios
      .get(`${API_SERVER}wp-json/api/v1/dropdown/contact/subsites`)
      .then((response: any) => {
        return setData(response.data);
      });
  }, []);

  useEffect(() => {
    fetchRecruitationDropdown();
  }, [fetchRecruitationDropdown]);

  return (
    <React.Fragment>
      {data &&
        data.map((item: any) => {
          return <DropdownItem link="dropdown/contact" item={item} />;
        })}
    </React.Fragment>
  );
};

export default DropdownContactNavbar;

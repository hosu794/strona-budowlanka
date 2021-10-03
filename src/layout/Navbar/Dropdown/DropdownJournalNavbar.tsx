import * as React from "react";

import axios from "axios";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { API_SERVER } from "../../../constants";
import DropdownItem from "./DropdownItems";

const DropdownJournalNavbar = () => {
  const [data, setData] = useState<any>();

  const fetchJournalDropdown = useCallback(() => {
    axios
      .get(`${API_SERVER}wp-json/api/v1/dropdown/journal/subsites`)
      .then((response: any) => {
        return setData(response.data);
      });
  }, []);

  useEffect(() => {
    fetchJournalDropdown();
  }, [fetchJournalDropdown]);

  return (
    <React.Fragment>
      {data &&
        data.map((item: any) => {
          return <DropdownItem link="dropdown/journal" item={item} />;
        })}
    </React.Fragment>
  );
};

export default DropdownJournalNavbar;

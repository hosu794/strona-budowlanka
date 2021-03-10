import * as React from "react";

import { useHistory } from "react-router";
import Layout from "../Layout";
import * as H from "history";
import CategoryLayout from "../CategoryLayout";

const BIP = () => {
  const history: H.History<any> = useHistory();

  const onClick = (): void => {
    history.goBack();
  };

  return (
    <CategoryLayout title="Obowiązek informacyjny">
      <h1 className="text-center">Obowiązek informacyjny RODO</h1>
    </CategoryLayout>
  );
};

export default BIP;

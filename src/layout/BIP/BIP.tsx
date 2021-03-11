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
    <CategoryLayout title="BIP">
      <div className="p-5">
        <h1 className="text-lg md:text-3xl font-bold pb-3">
          Projekt - Przyjazna i atrakcyjna szkoła gwarancją dobrego
          wykształcenia
        </h1>
        <ul className="flex flex-col">
          <li className="pt-2 pb-2">
            <a href="">
              Projekt - Przyjazna i atrakcyjna szkoła gwarancją dobrego
              wykształcenia
            </a>
          </li>
          <li className="pt-2 pb-2">
            <a href="">Projekt - Europa dla każdego</a>
          </li>
          <li className="pt-2 pb-2">
            <a href="">Praktyki zagraniczne - 2021</a>
          </li>
        </ul>
      </div>
    </CategoryLayout>
  );
};

export default BIP;

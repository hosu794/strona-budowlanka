import * as React from "react";

import { useHistory } from "react-router";
import * as H from "history";
import Layout, { ILayout } from "./Layout";

interface ICategoryLayout extends ILayout {
  title: string;
}

const CategoryLayout = ({ children, title }: ICategoryLayout) => {
  const history: H.History<any> = useHistory();

  const onClick = (): void => {
    history.goBack();
  };

  return (
    <Layout>
      <div className="min-h-screen flex flex-col justify-center items-center mt-20">
        <div className="flex flex-row space-between pb-20 pt-20 w-8/12 justify-between">
          <h1
            className="uppercase text-2xl font-extrabold"
            style={{
              color: "#3559A4",
            }}
          >
            {title}
          </h1>
          <div>
            <p
              onClick={onClick}
              className="font-extrabold text-lg cursor-pointer"
            >
              Powrót
            </p>
          </div>
        </div>
        <div className="w-auto flex flex-col w-8/12">
          <div>{children}</div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryLayout;

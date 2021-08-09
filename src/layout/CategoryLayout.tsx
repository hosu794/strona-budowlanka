import * as React from "react";
import CategoryLayoutChildren from "./CategoryLayoutChildren";

import Layout, { ILayout } from "./Layout";
import SubsiteLayout from "./SubsiteLayout";

interface ICategoryLayout extends ILayout {
  title: string;
}

const CategoryLayout = ({ children, title }: ICategoryLayout) => {
  return (
    <CategoryLayoutChildren>
      <div className="min-h-screen flex flex-col justify-center items-center mt-20">
        <div className="flex flex-row space-between pb-20 pt-20 w-8/12 justify-between">
          <h1
            className="text-2xl font-extrabold"
            style={{
              color: "#3559A4",
            }}
          >
            {title}
          </h1>
        </div>
        <div className="w-auto flex flex-col w-8/12">
          <div>{children}</div>
        </div>
      </div>
    </CategoryLayoutChildren>
  );
};

export default CategoryLayout;

import * as React from "react";
import Layout from "./Layout";

import NotFoundImage from "../assets/404.svg";

const NotFound = () => {
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
            Strona nie znaleziona
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <img src={NotFoundImage} alt="not found" />
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;

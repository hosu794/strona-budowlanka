import * as React from "react";

import FirstImage from "../../assets/2015-złota.jpg";
import TwiceImage from "../../assets/2017-srebrna.png";
import ThirdImage from "../../assets/2019-brazowe.jpg";
import FourthImage from "../../assets/2019-srebrne.jpg";

const ShieldsLandingPage = () => {
  return (
    <main className="flex items-center justify-center xl:h-auto h-auto xl:h-screen w-screen bg-red">
      <div className=" sm:h-auto h-screen w-screen  flex justify-center items-center flex-col xl:justify-around xl:flex-row text-black">
        <div className="flex flex-col h-auto sm:h-3/4 justify-center items-center xl:p-10">
          <div className="pt-10 xl:pt-0  sm:w-42 sm:h-42 w-4/12 h-4/12 xl:w-3/4 xl:h-3/4">
            <img className="rounded-lg" src={TwiceImage} alt="Lessons" />
          </div>
        </div>
        <div className="flex flex-col h-auto sm:h-3/4  justify-center items-center xl:p-10">
          <div className="pt-10 xl:pt-0  sm:w-42 sm:h-42 w-4/12 h-4/12 xl:w-3/4 xl:h-3/4">
            <img className="rounded-lg" src={ThirdImage} alt="Lessons" />
          </div>
        </div>
        <div className="flex flex-col h-auto sm:h-3/4  justify-center items-center xl:p-10">
          <div className="pt-10 xl:pt-0  sm:w-42 sm:h-42 w-4/12 h-4/12 xl:w-3/4 xl:h-3/4">
            <img className="rounded-lg" src={FourthImage} alt="Lessons" />
          </div>
        </div>
        <div className="flex flex-col h-auto sm:h-3/4  justify-center items-center xl:p-10 xl:mb-0 mb-5">
          <div className="pt-10 xl:pt-0  sm:w-42 sm:h-42 w-4/12 h-4/12 xl:w-3/4 xl:h-3/4">
            <img className="rounded-lg" src={FirstImage} alt="Lessons" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShieldsLandingPage;

import * as React from "react";

import LessonImage from "../../assets/lessons.svg";
import DiaryImage from "../../assets/diary.svg";

const LessonsLandingPage = () => {
  return (
    <main className="flex items-center justify-center xl:h-auto h-screen w-screen bg-green">
      <div className=" h-screen w-screen  flex justify-center items-center flex-col xl:justify-around space-x-10 xl:flex-row text-white">
        <div className="flex flex-col h-auto sm:h-3/4  justify-center items-center">
          <div className="pt-10 xl:pt-0 w-52 h-40 sm:w-96 sm:h-96 xl:w-3/4 xl:h-3/4">
            <img src={LessonImage} alt="Lessons" />
          </div>
          <button className="mt-16 sm:mt-0 sm:w-1/3 bg-red-500 hover:bg-red-600 text-white xl:text-2xl font-bold py-3 px-10 rounded">
            <a href="https://www.zs1mm.home.pl/plan/"> Plan Lekcji</a>
          </button>
        </div>

        <div
          style={{
            marginLeft: "0",
          }}
          className="flex flex-col h-auto sm:h-3/4  justify-center items-center"
        >
          <div className="pt-10 xl:pt-0 w-52 h-40 sm:w-96 sm:h-96 xl:w-3/4 xl:h-3/4">
            <img src={DiaryImage} alt="Lessons" />
          </div>
          <button className="mt-16 sm:mt-0 sm:w-1/3 bg-red-500 hover:bg-red-600 text-white xl:text-2xl font-bold py-3 px-10 rounded">
            <a href="https://uonetplus-uczen.vulcan.net.pl/powiatminski">
              Dziennik
            </a>
          </button>
        </div>
      </div>
    </main>
  );
};

export default LessonsLandingPage;

import * as React from "react";

import Image from "../../assets/gallery.svg";

import { Link } from "react-router-dom";

const GalleryLandingPage = () => {
  return (
    <main className="flex items-center justify-center lg:h-auto h-screen bg-white">
      <div className="h-screen w-screen flex justify-center items-center flex-col xl:justify-around space-x-10  xl:flex-row text-white">
        <div className="flex w-3/4 h-3/4 sm:w-full sm:h-1/2 justify-center items-center flex-col">
          <img src={Image} alt="Gallery" />
          <button className="mt-16 bg-transparent font-bold text-2xl hover:bg-green-500 text-green-700 hover:text-white py-2 px-10 border-2 border-green-500 hover:border-transparent rounded">
            <Link to="/gallery">Galeria</Link>
          </button>
        </div>
      </div>
    </main>
  );
};

export default GalleryLandingPage;

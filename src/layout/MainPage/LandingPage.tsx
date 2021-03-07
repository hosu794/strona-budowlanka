import { Link } from "react-router-dom";

import MainImage from "../../assets/mainPage.svg";

const LandingPage = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="h-auto w-screen flex justify-center space-x-10 flex-col-reverse  xl:flex-row">
        <div className="ml-6 xl:ml-0 flex flex-col justify-center align-items">
          <span className="text-left sm:text-center md:text-left text-base lg:text-2xl lg:font-bold ml-6 uppercase text-light-blue">
            Strona
          </span>
          <span className="text-2xl text-left sm:text-center md:text-left sm:text-3xl lg:text-3xl lg:font-black xl:text-6xl p-3 text-blue">
            Zespół Szkół nr 1
          </span>
          <span className="text-2xl text-left sm:text-center md:text-left sm:text-3xl lg:text-3xl lg:font-black xl:text-6xl p-3 text-blue">
            im. Kazimierza Wielkiego
          </span>
          <span className="text-2xl text-left sm:text-center md:text-left sm:text-3xl lg:text-3xl lg:font-black xl:text-6xl p-3 text-blue">
            W Mińsku Mazowieckim
          </span>
          <Link to="/posts">
            <button className="rounded w-3/4 sm:w-1/2 ml-3 lg:mt-4 xl:mt-16 bg-transparent font-bold hover:bg-green-500 text-green-700 hover:text-white py-3 px-14 text-xl md:text-3xl tracking-wider border-2 border-green-500 hover:border-transparent rounded">
              Aktualności
            </button>
          </Link>
        </div>
        <img
          alt="School"
          className="pr-10 sm:pr-0 mb-10 h-10/12 w-10/12 xl:mb-0 md:h-10/12 md:w-10/12 lg:h-8/12 lg:w-8/12 xl:h-4/12 xl:w-4/12 rounded-md"
          src={MainImage}
        />
      </div>
    </main>
  );
};

export default LandingPage;

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-custom">
      <div className="text-white font-bold flex flex-row align-items justify-center">
        <div className="w-1/3 p-5">
          <h2 className="text-lg">Inspektor Ochrony danych Osobowych</h2>
        </div>
        <div className="w-1/3 p-5 flex flex-col">
          <h2 className="text-lg">Kadra Kierownicza: </h2>
          <span className="mt-2">Dyrektor - Małgorzata Beczek</span>
          <span className="mt-2">Wicedyrektor - Elżbieta Parol</span>
          <span className="mt-2">Wicedyrektor - Paweł Domagała</span>
          <span className="mt-2">Wicedyrektor - Wojciech Jackowski</span>
          <span className="mt-2">Kierownik Internatu - Jolanta Binkowska</span>
        </div>
        <div className="w-1/3 p-5 font-normal">
          <p className="text-lg">Zespół Szkół nr 1 im. Kazimierza Wielkiego</p>
          <p>ul. Budowlana</p>
          <p>05-300 Mińsk Mazowiecki</p>
          <p>tel/fax 25 758 25 64</p>
        </div>
      </div>
      <div className="text-center p-4">
        <span className="text-white text-base text-center text-lg">
          Copyright by Zespół Szkół Nr 1 Mińsk Mazowiecki 2010-2020 |{" "}
          <b>Polityka prywatności</b> | Powered by
          <a href="www.hosuwebsites.com" target="_blank">
            <b className="pointer-click"> HOSU</b>
          </a>
        </span>
      </div>
    </footer>
  );
}

import React from "react";

const ContactLandingPage = () => {
  return (
    <main className="flex items-center flex-col justify-evenly h-auto lg:h-screen bg-red">
      <div>
        <h1 className="p-3 lg:p-0 text-5xl font-bold text-white">Kontakt</h1>
      </div>

      <div className="xl:h-1/2 h-3/4 w-3/4 md:w-screen flex flex-col lg:flex-row justify-evenly items-center text-white">
        <div className="p-5 lg:p-0">
          <div className="bg-white text-black rounded-2xl shadow-2xl h-64 w-42 sm:h-64 sm:w-96 lg:h-96 lg:w-56 xl:w-72 xl:h-96">
            <div className="p-3 text-xs lg:text-base xl:text-lg">
              <h1 className="font-bold">
                Zespół Szkół nr 1 im. Kazimierza Wielkiego
              </h1>
              <p className="mb-0">ul. Budowlana 4</p>
              <p className="mb-0">05-300 Mińsk Mazowiecki</p>
              <p className="mb-0">woj. mazowiecki</p>
              <br />
              <h1>tel/fax 25 758 25 64, 25 758 35 11</h1>
              <p className="mb-0">e-mail: zs1mm@zs1mm.edu.pl</p>
              <br />
              <span>
                Sekretariat szkoły zaprasza od poniedziałku do piątku w
                godzinach od 8:00 do 16:00.
              </span>
            </div>
          </div>
        </div>

        <div style={{ marginLeft: "0" }} className="p-5 lg:p-0">
          <div className="bg-white text-black rounded-2xl shadow-2xl  h-64 w-42 sm:h-64 sm:w-96  lg:h-96 lg:w-56 xl:w-72 xl:h-96">
            <div className="p-3 text-xs lg:text-base xl:text-lg">
              <h1 className="font-bold">
                INTERNAT Zespołu Szkół nr 1 im. K. Wielkiego w Mińsku
                Mazowieckim tel: 518 345 155
              </h1>
              <p className="mb-0">tel: 518 345 155</p>
            </div>
          </div>
        </div>

        <div style={{ marginLeft: "0" }} className="p-5 lg:p-0">
          <div className="bg-white text-black rounded-2xl shadow-2xl  h-64 w-42 sm:h-64 sm:w-96  lg:h-96 lg:w-56 xl:w-72 xl:h-96">
            <div className="p-3 text-xs lg:text-base xl:text-lg">
              <h1 className="font-bold">Opiekun strony: Kamil Koseski</h1>
              e-mail: informatyk@zs1mm.edu.pl
            </div>
          </div>
        </div>

        <div style={{ marginLeft: "0" }} className="p-5 lg:p-0">
          <div className="bg-white text-black rounded-2xl shadow-2xl h-64 w-42 sm:h-64 sm:w-96  lg:h-96 lg:w-56 xl:w-72 xl:h-96">
            <div className="p-3 text-xs lg:text-base xl:text-lg">
              <h1 className="font-bold">Konto Rady Rodziców: </h1>
              BS w Mińsku Mazowieckim 77 9226 0005 0000 0374 2000 0010
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactLandingPage;

import * as React from "react";

import Image from "../../assets/contact.svg";

import CategoryLayout from "../CategoryLayout";

const Contact = () => {
  return (
    <CategoryLayout title="Kontakt">
      <div className="flex flex-col lg:flex-row">
        <div>
          <h2 className="text-2xl font-bold uppercase pb-3">
            Zespół Szkół nr 1 im. Kazimierza Wielkiego
          </h2>
          <p className="p-1">
            {" "}
            ul. Budowlana 4 05-300 Mińsk Mazowiecki woj. mazowieckie
          </p>
          <p className="p-1">tel/fax: 25 758 25 64, 25 758 35 11</p>
          <p className="p-1">e-mail: zs1mm@zs1mm.edu.pl</p>
          <span className="p-1">
            Sekretariat szkoły zaprasza od poniedziałku do piątku w godzinach od
            8:00 do 16:00
          </span>
          <h2 className="uppercase text-lg font-bold pb-3 pt-3">
            INTERNAT Zespołu Szkół nr 1 im. K. Wielkiego w Mińsku Mazowieckim
          </h2>
          <p className="p-1">tel: 518 345 155</p>
          <h2 className="p-1">Opiekun strony:</h2>
          Kamil Koseski e-mail: informatyk@zs1mm.edu.pl
          <h2 className="font-bold text-lg pt-3">Konto Rady Rodziców</h2>
          <p className="p-1">BS w Mińsku Mazowieckim</p>
          <p className="p-1">77 9226 0005 0000 0374 2000 0010</p>
        </div>
        <img
          src={Image}
          className="lg:w-1/2 lg:h-1/2 p-0 lg:p-5"
          alt="contact"
        />
      </div>
    </CategoryLayout>
  );
};

export default Contact;

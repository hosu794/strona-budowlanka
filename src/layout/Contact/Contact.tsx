import * as React from "react";

import Image from "../../assets/contact.svg";

import { useHistory } from "react-router";
import Layout from "../Layout";
import * as H from "history";
import CategoryLayout from "../CategoryLayout";

const Contact = () => {
  const history: H.History<any> = useHistory();

  const onClick = (): void => {
    history.goBack();
  };

  return (
    <CategoryLayout title="Kontakt">
      <h1 className="uppercase text-2xl">Kontakt</h1>
      <h2>Zespół Szkół nr 1 im. Kazimierza Wielkiego</h2>
      <p> ul. Budowlana 4 05-300 Mińsk Mazowiecki woj. mazowieckie</p>
      <p>tel/fax: 25 758 25 64, 25 758 35 11</p>
      <p>e-mail: zs1mm@zs1mm.edu.pl</p>
      Sekretariat szkoły zaprasza od poniedziałku do piątku w godzinach od 8:00
      do 16:00
      <h2 className="uppercase text-bold">
        INTERNAT Zespołu Szkół nr 1 im. K. Wielkiego w Mińsku Mazowieckim
      </h2>
      <p>tel: 518 345 155</p>
      <h2>Opiekun strony:</h2>
      Kamil Koseski e-mail: informatyk@zs1mm.edu.pl
      <h2 className="font-bold">Konto Rady Rodziców</h2>
      <p>BS w Mińsku Mazowieckim</p>
      <p>77 9226 0005 0000 0374 2000 0010</p>
      <img src={Image} height="50%" width="50%" alt="contact" />
    </CategoryLayout>
  );
};

export default Contact;

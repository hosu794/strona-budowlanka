import * as React from "react";

import { useHistory } from "react-router";
import Layout from "../Layout";
import * as H from "history";

const MentalHelp = () => {
  const history: H.History<any> = useHistory();

  const onClick = (): void => {
    history.goBack();
  };

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
            Pomoc psychologiczno-prawna
          </h1>
          <div>
            <p
              onClick={onClick}
              className="font-extrabold text-lg cursor-pointer"
            >
              Powrót
            </p>
          </div>
        </div>
        <div className="w-auto flex flex-col w-8/12">
          <span className="text-center">
            <b>
              <a href="#">PEDAGOG SZKOLNY</a>
            </b>
          </span>
          <p className="uppercase">
            DROGI UCZNIU ZWRÓĆ SIĘ DO PEDAGOGA SZKOLNEGO GDY:
          </p>
          <ul>
            <li>Czujesz, że nikt Cię nie rozumie, jesteś samotny.</li>
            <li>
              Nie potrafisz porozumieć się z nauczycielem, wychowawcą, rodzicem
            </li>
            <li>Masz problemy i nie wiesz jak je rozwiązać.</li>
            <li>Znajdujesz się w trudnej sytuacji materialnej.</li>
            <li>Chciałbyś pomóc innym, nie wiesz w jaki sposób.</li>
            <li>Widzisz, że komuś dzieje się krzywda.</li>
            <li>
              Chcesz tak zwyczajnie porozmawiać, podzielić się swoją radością ,
              sukcesem, ciekawymi pomysłami
            </li>
          </ul>
          <p>
            Przyjdź także z każdą sprawą, z którą sam nie potrafisz sobie
            poradzić.
          </p>
          <p className="uppercase">
            DROGI RODZICU ZWRÓCIĆ SIĘ DO PEDAGOGA SZKOLNEGO GDY:
          </p>
          <ul>
            <li>Niepokoi Cię zachowanie dziecka</li>
            <li>Chcesz porozmawiać o dziecku i Twoich z nim relacjach</li>
            <li>
              Masz pytania dotyczące wyników w nauce dziecka i jego
              funkcjonowania w szkole
            </li>
            <li>Potrzebujesz wsparcia w procesie wychowania</li>
            <li>Masz pytania i nie wiesz do kogo się z nim zwrócić</li>
            <li>Szukasz pomocy</li>
          </ul>
          <b>mgr Agnieszka Wojda</b> opieka nad uczniami: Liceum, Branżowej
          Szkoły I Stopnia Branżowej Szkoły I Stopnia Specjalnej
          <b>Kontakt email: </b> pedagog@live.zs1mm.edu.pl
          <b>tel:</b>
        </div>
      </div>
    </Layout>
  );
};

export default MentalHelp;

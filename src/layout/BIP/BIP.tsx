import * as React from "react";

import { useHistory } from "react-router";
import Layout from "../Layout";
import * as H from "history";
import CategoryLayout from "../CategoryLayout";

const BIP = () => {
  const history: H.History<any> = useHistory();

  const onClick = (): void => {
    history.goBack();
  };

  return (
    <CategoryLayout title="BIP">
      <h1 className="uppercase text-2xl">BIP</h1>
      <span>
        Biuletyn Informacji Publicznej Zespołu Szkół nr 1 im. Kazimierza
        Wielkiego w Mińsku Mazowieckim
      </span>

      <ul>
        <li>BILANS jednostki budżetowej</li>
        <li>Rachunek zysków i strat</li>
        <li>Zestawienie zmian w funduszu jednostki</li>
        <li>Informacja dodatkowa</li>
        <li>Sprawozdanie finansowe za rok 2018</li>
      </ul>

      <h2 className="uppercase text-2xl">
        OGŁOSZENIE O NABORZE NA WOLNE STANOWISKO URZĘDNICZE
      </h2>
      <p>
        Dyrektor Zespołu Szkół nr 1 im. Kazimierza Wielkiego w Mińsku
        Mazowieckim ogłasza konkurs na stanowisko intendent
      </p>
      <ul>
        <li>Informacja</li>
        <li>Ogłoszenie</li>
      </ul>

      <h2 className="uppercase text-2xl">
        Ogłoszenie o zamówieniu na usługi społeczne
      </h2>
      <p>
        nazwa zamówienia — świadczenie usługi hotelarskiej i gastronomicznej w
        tym realizację zakwaterowania i wyżywienia dla uczestników mobilności
        międzynarodowej organizowanej w ramach projektu: nr 20204-
        PL01-KA102-080376 pt. „Europa dla zawodowca", finansowanego ze środków
        Europejskiego Funduszu Społecznego w ramach projektu „Międzynarodowa
        mobilność edukacyjna uczniów i absolwentów oraz kadry kształcenia
        zawodowego", Program Operacyjny Wiedza Edukacja Rozwój 2014-2020.
      </p>

      <ul>
        <li>Ogłoszenie</li>
      </ul>
    </CategoryLayout>
  );
};

export default BIP;

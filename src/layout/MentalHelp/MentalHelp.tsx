import * as React from "react";

import CategoryLayout from "../CategoryLayout";

const MentalHelp = () => {
  return (
    <CategoryLayout title="Pomoc psychologiczno-pedagogiczna">
      <p className="uppercase font-bold pb-3">
        DROGI UCZNIU ZWRÓĆ SIĘ DO PEDAGOGA SZKOLNEGO GDY:
      </p>
      <ul>
        <li className="p-1">
          Czujesz, że nikt Cię nie rozumie, jesteś samotny.
        </li>
        <li className="p-1">
          Nie potrafisz porozumieć się z nauczycielem, wychowawcą, rodzicem
        </li>
        <li className="p-1">Masz problemy i nie wiesz jak je rozwiązać.</li>
        <li className="p-1">Znajdujesz się w trudnej sytuacji materialnej.</li>
        <li className="p-1">Chciałbyś pomóc innym, nie wiesz w jaki sposób.</li>
        <li className="p-1">Widzisz, że komuś dzieje się krzywda.</li>
        <li className="p-1">
          Chcesz tak zwyczajnie porozmawiać, podzielić się swoją radością ,
          sukcesem, ciekawymi pomysłami
        </li>
      </ul>
      <p>
        Przyjdź także z każdą sprawą, z którą sam nie potrafisz sobie poradzić.
      </p>
      <p className="uppercase pb-3 pt-3 font-bold">
        DROGI RODZICU ZWRÓCIĆ SIĘ DO PEDAGOGA SZKOLNEGO GDY:
      </p>
      <ul>
        <li className="p-1">Niepokoi Cię zachowanie dziecka</li>
        <li className="p-1">
          Chcesz porozmawiać o dziecku i Twoich z nim relacjach
        </li>
        <li className="p-1">
          Masz pytania dotyczące wyników w nauce dziecka i jego funkcjonowania w
          szkole
        </li>
        <li className="p-1">Potrzebujesz wsparcia w procesie wychowania</li>
        <li className="p-1">
          Masz pytania i nie wiesz do kogo się z nim zwrócić
        </li>
        <li className="p-1">Szukasz pomocy</li>
      </ul>
      <div className="pt-3 pb-3">
        <b>mgr Agnieszka Wojda</b> opieka nad uczniami: Liceum, Branżowej Szkoły
        I
        <br />
        Stopnia Branżowej Szkoły I Stopnia Specjalnej
        <br />
        <div className="pt-1 pb-1">
          <b>Kontakt email: </b> pedagog@live.zs1mm.edu.pl
        </div>
        <b>tel:</b>
      </div>
    </CategoryLayout>
  );
};

export default MentalHelp;

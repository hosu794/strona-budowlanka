import * as React from "react";

import * as H from "history";

import Image from "../../assets/kazimierz.jpg";
import CategoryLayout from "../CategoryLayout";

const Patron = () => {
  return (
    <CategoryLayout title="Patron">
      <p className="pt-3 pb-3">
        Przełomowy dla historii szkoły okazał się rok 2000. Zbiegły się w nim
        trzy wielkie uroczystości: 55-lecie szkoły, nadanie imienia oraz zjazd
        absolwentów.
      </p>

      <p className="pt-4 pb-3">
        Od września 1999 roku uczniowie, rodzice i nauczyciele pracowali nad
        wyborem patrona. Ostatecznie od 21 grudnia 1999 roku Zespół Szkół Nr 1
        nosi nazwę imienia Kazimierza Wielkiego.
      </p>

      <p>
        Uwieńczenie wysiłku nastąpiło 6 maja 2000 roku, kiedy to uroczyście
        bramy szkoły przekroczył orszak konny z królem Kazimierzem Wielkim na
        czele.
      </p>

      <p>
        Tego dnia z pewnością nie zapomną uczniowie i absolwenci słynnej
        "Budowlanki" — to oni tworzą historię swojej szkoły.
      </p>

      <h1 className="text-md">Kilka słów o patronie</h1>

      <br />

      <p className="pb-3">
        <b>Kazimierz Wielki</b> był jedynym synem Władysława Łokietka i Jadwigi,
        księżnej wielkopolskiej. Urodził się w 1310 roku w miasteczku Kowal na
        Kujawach. Otrzymał bardzo surowe wychowanie od pobożnej matki, ojciec
        zaś wprowadzał go w sztukę rządzenia od dziecięcych lat.
      </p>

      <div className="flex flex-col md:flex-row justify-content align-items">
        <img src={Image} alt="Kazimierz Wielki" />
        <div className="p-3">
          <p>
            Ten oto ostatni król Polski z rodu Piastów rządził krajem w latach
            1333-1370. W chwili objęcia władzy przez niego Polska zajmowała
            drugorzędną pozycję międzynarodową. Natomiast za jego panowania
            Polska przekształciła się w silny organizm polityczny.Terytorium
            państwa wzrosło ponad dwa razy, a liczba ludności trzykrotnie. Do
            Polski dołączono Ruś Halicką i Włodzimierską, Podole, częściowo
            Mazowsze oraz kilka grodów na Pomorzu Zachodnim. Nie udało się
            natomiast odzyskać Kazimierzowi Wielkiemu Sląska i Pomorza
            Gdańskiego.
          </p>
          <p>
            Władca ten był zręcznym politykiem. Doskonałym przykładem na to są
            układy z Luksemburgami i Krzyżakami.
          </p>

          <p>
            Kazimierz Wielki był zapobiegliwym gospodarzem i budowniczym. Za
            jego czasów skarb był pełen, wzrosła liczba miast, wsi, zamków.
            Rozwinął się handel, scentralizowana została administracja a prawo
            skodyfikowane. Władca ten zadbał również o rozwój nauki zakładając w
            1364 roku Akademię Krakowską.
          </p>
        </div>
      </div>
      <p className="pb-3 pt-3">
        Panowanie Kazimierza Wielkiego stworzyło warunki do okrzepnięcia naszego
        kraju po okresie rozbicia dzielnicowego i dało podstawy świetności
      </p>
    </CategoryLayout>
  );
};

export default Patron;

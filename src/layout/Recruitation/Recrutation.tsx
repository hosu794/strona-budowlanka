import * as React from "react";
import CategoryLayout from "../CategoryLayout";

import RecrutationImage from "../../assets/rekrutacja.jpg";

var givenCode = `
<div id="maincolumn"><h1>Rekrutacja</h1><div class="head">
</div>
<div>
<p>&nbsp;</p>
<ul>
</ul>
</div>
<div><span>Rekrutacja w roku szkolnym 2020/2021 odbywa się poprzez stronę:&nbsp;</span></div>
<div>
<ul>
<li><a id="LPlnk152501" rel="noopener noreferrer" href="https://minskmazowiecki.edu.com.pl/kandydat" target="_blank">https://minskmazowiecki.edu.com.pl/kandydat</a></li>
</ul>
<ul>
<li><a href="assets/files/Dane_2020/rek/instrukcja-ponadpodstawowe-KANDYDAT.pdf.pdf">Nabór Szkoły ponadpodstawowe - poradnik użytkownika&nbsp;KANDYDAT</a> (rejestracja, wybór preferencji, wydruk wniosku od strony 18)</li>
</ul>
<p>Zaintresowani pobytem w internacie uzuskają informację na stronie internetowej:</p>
<ul>
<li><a href="../internat/">Internat</a></li>
</ul>
<ul>
</ul>
<p><span>Do klasy wojskowej - Oddziału Przygotowania Wojskowego oraz klasy sportowej obowiązuje sprawdzian uzdolnień kierunkowych - szczegóły składania dokumentów oraz przeprowadzania prób sprawności fizycznej znajdują się w Harmonogramie rekrutacji"&nbsp;</span></p>
<p><span>&nbsp;</span><span>Sprawdzian uzdolnień kierunkowych obowiązuje także jeśli klasa wojskowa czy sportowa jest drugim, trzecim itd wyborem. Kandydat, który nie przystąpi do sprawdzianu uzdolnień kierunkowych nie będzie brany pod uwagę w procesie rekrutacji do ww klas</span></p>
<ul>
</ul>
<p>&nbsp;</p>
<ul>
<li><span style="font-size: 180%;"><a href="assets/files/Dane_2020/rek/Harmonogram  2020 3.pdf">Harmonogram rekrutacji</a></span></li>
<li><a href="assets/files/Dane_2020/rek/Zal 1.pdf">Załącznik 1</a></li>
<li><a href="assets/files/Dane_2020/rek/Zal 2.pdf">Załącznik 2</a></li>
<li><a href="assets/files/Dane_2020/02 LUT/Zal 3.pdf">Załącznik 3</a></li>
</ul>
<p>SKŁADANIE DOKUMENTÓW</p>
<p>Dokumenty brane pod uwagę w
procesie rekrutacyjnym można składać dwoma sposobami:</p>
<p><span style="text-decoration: underline;">- osobiście w szkole</span></p>
<p>Wypełnione wydrukowane i
podpisane wnioski, potwierdzone kserokopie świadectw oraz potwierdzone
kserokopie wyników egzaminu ósmoklasisty, należy złożyć w okienku portierni w
Zespole Szkół nr 1 im. Kazimierza Wielkiego, ul. Budowlana 4, 05-300 Mińsk
Mazowiecki. Przy okienku może znajdować się tylko jedna osoba, pozostałe osoby
czekają przed szkołą w odstępach min 2 m od siebie. Podczas składania
dokumentów należy mieć zasłonięte usta i nos. Wyżej wymienione dokumenty,
składane osobiście będą przyjmowane w godzinach 12.00 – 16.00</p>
<p><span style="text-decoration: underline;">- za pomocą poczty
elektronicznej</span>&nbsp; </p>
<p>Wypełnione wydrukowane i
podpisane wnioski, potwierdzone kserokopie świadectw oraz potwierdzone
kserokopie wyników egzaminu ósmoklasisty można przesłać w formie skanów lub
fotografii na adres <a href="mailto:rekrutacja@live.zs1mm.edu.pl">rekrutacja@live.zs1mm.edu.pl</a>.&nbsp;<span>W TEMACIE WIADOMOŚCI NALEŻY UMIEŚCIĆ NUMER WYGENEROWANY W SYSTEMIE VULCAN, ZNAJDUJĄCY SIĘ NA WNIOSKU.</span> Należy zadbać o czytelność wysyłanych dokumentów. Dokumenty nieczytelne,
zawierające błędy, nie będą brane pod uwagę w procesie rekrutacji. Należy
zadbać, aby nie przesłać przypadkowo w.w dokumentów w niepowołane ręce, gdyż
zawierają one dane osobowe kandydata. Potwierdzenie wpłynięcia prawidłowo
przesłanych dokumentów zostanie przesłane niezwłocznie na adres poczty z której
zostały wysłane, nie później niż 3 dni robocze.</p>
<p>UWAGA!!! W dniu 23.06.2020 Szkoła
nie będzie przyjmowała wniosków składanych osobiście.</p>
<p>&nbsp;</p>
<p>WYBÓR KIERUNKÓW KSZTAŁCENIA</p>
<p>Podczas dokonywania wyboru szkoły
oraz kierunków kształcenia należy, wziąć pod uwagę, że w procesie rekrutacyjnym
ważna jest kolejność wpisanych kierunków kształcenia. Kandydat, który jako
pierwszą szkołę oraz kierunek wybierze szkołę i kierunek XXX, to system
przeliczy punkty zgodnie z obowiązującym prawem i umieści kandydata na liście
osób chętnych do danego oddziału. Jeśli zdarzy się, że miejsce na liście jest
poza limitem przyjęć, system przeliczy kandydatowi punkty drugiego wyboru YYY i
umieści go na liście. Jeśli uzyskana liczba punktów nie pozwoli kandydatowi na
uzyskanie miejsca na liście zakwalifikowanych, system przeliczy punkty do
trzeciego wyboru ZZZ. Jeśli kandydat uzyska odpowiednią liczbę punktów w
wyborze ZZZ, zostanie umieszczony na liście zakwalifikowanych zgodnie z
uzyskaną liczbą punktów. </p>
<p>Ważne jest, aby nie ograniczać
się do jednego wyboru, tylko wykorzystać maksymalną liczbę szkół i kierunków
kształcenia we wniosku do szkoły. Kandydat może wybrać jako pierwszy wybór szkołę
XXX i kilka kierunków w danej szkole. </p>
<p>Np. </p>
<p>Liceum w Zespole Szkół nr 1 im.
Kazimierza Wielkiego w Mińsku Mazowieckim</p>
<p>pierwszy wybór:</p>
<p>– klasa wojskowa</p>
<p>drugi wybór:</p>
<p>– klasa psychologiczna</p>
<p>trzeci wybór:</p>
<p>– klasa prawna</p>
<p>Technikum w Zespole Szkół nr 1
im. Kazimierza Wielkiego w Mińsk Mazowieckim</p>
<p>- technik informatyk</p>
<p>- technik geodeta itd</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<ul>
</ul>
<p>&nbsp;</p>
<p><span>Wszelkie informacje dotyczące rekrutacji w Zespole Szkół nr 1 im. Kazimierza Wielkiego w Mińsku Mazowieckim, znajdują się w regulaminie rekrutacji</span><br><br><br></p>
<span>&nbsp;</span></div>
<p>&nbsp;</p>
<hr>
<p>Terminy prób sprawności fizycznej do klasy przysposobienia wojsowego i klasy sportowej znajdują się w harmonogramie rekrutacji</p>
<p>&nbsp;</p>
<ul>
<li><span><a href="assets/files/Dane_2020/rek/2rekrutacja_ZS1_2020_21_ opis_prob_spr_fiz_szk_podst.pdf">Opis prób sprawności fizycznej - klasa wojskowa</a></span></li>
</ul>
<p>&nbsp;</p>
<p>Opis prób sprawności fizycznej klasa sportowa sekcja: piłka siatkowa dziewcząt, piłka nożna chłopców:</p>
<ul>
<li><span style="white-space: pre;">	<a href="assets/files/Dane_2020/03MAR/rekru/pilka_siatkowa motoryka.pdf">Próby sprawności fizycznej&nbsp; - pilka_siatkowa motoryka</a></span></li>
<li><span style="white-space: pre;">	<a href="assets/files/Dane_2020/03MAR/rekru/pilka_siatkowa technika.pdf">Próby sprawności fizycznej - pilka_siatkowa technika</a></span></li>
<li><span style="white-space: pre;">	<a href="assets/files/Dane_2020/03MAR/rekru/Proby sprawnosci fizycznej pilka nozna.pdf">Próby sprawności fizycznej piłka nożn</a>a</span></li>
</ul>
<p>&nbsp;</p>
<p>&nbsp;</p>
<hr>
<p>&nbsp;</p>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507" style="text-align: center;"><strong><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">Regulamin rekrutacji uczniów do klas pierwszych w Zespole Szkół nr 1&nbsp;</span></span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></strong></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507" style="text-align: center;"><strong><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">im. Kazimierza Wielkiego w Mińsku Mazowieckim</span></span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></strong></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Podstawa prawna:</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Ustawa z dnia 14 grudnia 2016r. prawo</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">&nbsp;oświatowe (t. j. Dz. U. z 2019. poz. 1148</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">&nbsp;ze zm.) – rozdział 6</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Rozporządzenie Ministra Edukacji</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">&nbsp;Narodowej z dnia 21 sierpnia 2019</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">&nbsp;w sprawie przeprowadzania postępowania rekrutacyjnego oraz post</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">ępowania uzupełniającego do publicznych przedszkoli, szkół, placówek i centrów (Dz. U. z 2019 poz. 1737)</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span>Harmonogram rekrutacji do szkół ponadpodstawowych na rok szkolny 2020/21 opublikowany przez Ministra Edukacji Narodowej w dniu 19.05.2020,</span><br>Statut Zespołu Szkół nr 1 im. Kazimierza Wielkiego w Mińsku Mazowieckim</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">W roku szkolnym 2020/2021</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">&nbsp;w Zespole Szkół nr 1 im. Kazimierza Wielkiego w Mińsku Mazowieckim nabór będzie prowadzony do następujących oddziałów klas pierwszych:</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">Liceum Ogólnokształcące:</span></span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">Klasa prawna&nbsp;</span></span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Przedmioty rozszerzone:&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">język polski, historia, wiedza o społeczeństwie</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Zajęcia edukacyjne punktowane w postępowaniu rekrutacyjnym:</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">język polski, matematyka, historia, wiedza o społeczeństwie</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">Klasa psychologiczna</span></span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Przedmioty rozszerzone:</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">biologia, chemia, język</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">&nbsp;angielski</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Zajęcia edukacyjne punktowane w postępowaniu rekrutacyjnym:</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">język polski, matematyka, biologia, chemia</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">Klasa wojskowa</span></span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Przedmioty rozszerzone:</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">fizyka, matematyka, język</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">&nbsp;angielski</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Zajęcia edukacyjne punktowane w postępowaniu rekrutacyjnym:</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">język polski, matematyka, fizyka, język angielski</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">* warunkiem ubiegania się o przyjęcie do klasy wojskowej – Oddziału Przysposobienia Wojskowego, jest uzyskanie pozytywnego wyniku predyspozycji sprawnościowych</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">Klasa sportowa</span></span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">&nbsp;(sekcja: piłki siatkowej&nbsp;</span></span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">dziewcząt</span></span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">, piłki nożnej</span></span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">&nbsp;chłopców</span></span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">)</span></span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Przedmioty rozszerzone:</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">biologia</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">,</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">&nbsp;chemia,</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">&nbsp;język</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">&nbsp;angielski</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Zajęcia edukacyjne punktowane w postępowaniu rekrutacyjnym:</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">język polski, matematyka, biologia, język angielski</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">* warunkiem ubiegania się o przyjęcie do klasy sportowej jest uzyskanie pozytywnego wyniku predyspozycji sprawnościowych</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">Technikum:</span></span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">Technik budownictwa&nbsp;</span></span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Przedmioty rozszerzone:&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">matematy</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">ka</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Zajęcia edukacyjne punktowane w postępowaniu rekrutacyjnym:</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">język polski, matematyka, fizyka, technika</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">Technik informatyk</span></span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Przedmioty rozszerzone:&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">matematyka</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Zajęcia edukacyjne punktowane w postępowaniu rekrutacyjnym:</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">język polski, matematyka, fizyka, informatyka</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">Technik geodeta</span></span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Przedmioty rozszerzone:&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">matematyka</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Zajęcia edukacyjne punktowane w postępowaniu rekrutacyjnym:</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">język polski, matematyka, fizyka, technika</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">Technik chłodnictwa i klimatyzacji</span></span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Przedmioty rozszerzone:&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">matematyka,&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Zajęcia edukacyjne punktowane w postępowaniu rekrutacyjnym:</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">język polski, matematyka, fizyka, technika</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">Technik budowy dróg</span></span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Przedmioty rozszerzone:&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">matematyka,&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Zajęcia edukacyjne punktowane w postępowaniu rekrutacyjnym:</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">język polski, matematyka, geografia, technika</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">Technik robót wykończeniowych w budownictwie</span></span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Przedmioty rozszerzone:&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">matematyka,&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Zajęcia edukacyjne punktowane w postępowaniu rekrutacyjnym:</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">język polski, matematyka, geografia, technika</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">Technik usług fryzjerskich</span></span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Przedmioty rozszerzone:&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">b</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">iologia,&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Zajęcia edukacyjne punktowane w postępowaniu rekrutacyjnym:</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">język polski, matematyka, biologia, technika</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">Technik przemysłu mody</span></span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Przedmioty rozszerzone:&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">b</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">iologia,&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Zajęcia edukacyjne punktowane w postępowaniu rekrutacyjnym:</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">język polski, matematyka, biologia, technika</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">Branżowa Szkoła I stopnia:</span></span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Monter zabudowy i robót wykończeniowych w budownictwie</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Monter sieci i instalacji sanitarnych</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Stolarz</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Fryzjer</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Zajęcia edukacyjne punktowane w postępowaniu rekrutacyjnym</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">&nbsp;(wszystkie zawody)</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">:</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="BCX0 SCXW159506507">
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">język polski, matematyka, technika</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">, informatyka</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Przeliczanie na punkty wyników egzaminu ósmoklasisty&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Wynik przedstawiony w procentach z:</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="ListContainerWrapper  BCX0 SCXW159506507">
<ul class="BulletListStyle1  BCX0 SCXW159506507">
<li class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">języka polskiego</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</li>
</ul>
</div>
</div>
<div class="BCX0 SCXW159506507">
<div class="ListContainerWrapper  BCX0 SCXW159506507">
<ul class="BulletListStyle1  BCX0 SCXW159506507">
<li class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">matematyki</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</li>
</ul>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">mnoży się przez&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">0,35</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Wynik przedstawiony w procentach z języka obcego nowożytnego mnoży się przez&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">0,3.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Przeliczanie na punkty&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">ocen z języka polskiego, matematyki&nbsp; i dwóch wybranych obowiązkowych zajęć edukacyjnych&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">wymienionych na świadectwie ukończenia szkoły podstawowej:</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="ListContainerWrapper  BCX0 SCXW159506507">
<ul class="BulletListStyle1  BCX0 SCXW159506507">
<li class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">celujący –18 punktów;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</li>
</ul>
</div>
</div>
<div class="BCX0 SCXW159506507">
<div class="ListContainerWrapper  BCX0 SCXW159506507">
<ul class="BulletListStyle1  BCX0 SCXW159506507">
<li class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">bardzo dobry –17 punktów;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</li>
<li class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">dobry –14 punktów;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</li>
<li class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">dostateczny –8 punktów;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</li>
<li class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">dopuszczający –2 punkty.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</li>
</ul>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
</div>
<div class="BCX0 SCXW159506507">
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Świadectwo ukończenia szkoły podstawowej z wyróżnieniem</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">:</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="ListContainerWrapper  BCX0 SCXW159506507">
<ul class="BulletListStyle1  BCX0 SCXW159506507">
<li class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">7 punktów</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</li>
</ul>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Przeliczanie na punkty szczególnych osiągnięć</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">Zawody wiedzy&nbsp;</span></span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">będące konkursem o&nbsp;</span></span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">zasięgu ponadwojewódzkim&nbsp;</span></span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">organizowanym przez kuratorów oświaty</span></span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">&nbsp;na podstawie zawartych porozumień</span></span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">:</span></span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="ListContainerWrapper  BCX0 SCXW159506507"><ol class="NumberListStyle2  BCX0 SCXW159506507">
<li class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">tytuł finalisty konkursu przedmiotowego –</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">10 punktów</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</li>
</ol></div>
</div>
<div class="BCX0 SCXW159506507">
<div class="ListContainerWrapper  BCX0 SCXW159506507"><ol class="NumberListStyle2  BCX0 SCXW159506507">
<li class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">tytuł laureata konkursu tematycznego lub interdyscyplinarnego –</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">&nbsp;</span></span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">7 punktów</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</li>
</ol></div>
<div class="ListContainerWrapper  BCX0 SCXW159506507"><ol class="NumberListStyle2  BCX0 SCXW159506507">
<li class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">tytuł finalisty konkursu tematycznego lub interdyscyplinarnego –&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">5 punktów</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</li>
</ol></div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">Zawody wiedzy&nbsp;</span></span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">będące konkursem o&nbsp;</span></span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">zasięgu międzynarodowym lub ogólnopolskim</span></span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">&nbsp;albo turniejem o zasięgu ogólnopolskim</span></span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">, przeprowadzonych zgodnie z przepisami wydanym na podstawie art. 22. Ust 6 ustawy o systemie oświaty</span></span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">:</span></span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">a) tytuł finalisty konkursu z przedmiotu lub przedmiotów artystycznych objętych ramowym planem nauczania szkoły artystycznej –&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">10 punktów</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">b) tytuł laureata turnieju z przedmiotu lub przedmiotów artystycznych nieobjętych ramowym planem nauczania szkoły artystycznej –&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">4 punkty</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">c) tytuł finalisty turnieju z przedmiotu lub przedmiotów artystycznych nieobjętych ramowym planem nauczania szkoły artystycznej –&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">3 punkty</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">Zawody wiedzy&nbsp;</span></span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">będące konkursem o&nbsp;</span></span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">zasięgu wojewódzkim&nbsp;</span></span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">organizowanym przez kuratora oświaty:</span></span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">a)&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">dwa lub więcej tytułów finalisty konkursu przedmiotowego –&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">10 punktów,</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">b) dwa lub więcej tytułów laureata k</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">onkursu tematycznego lub&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">interdyscyplinarnego –&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">7 punktów</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">,</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">c) dwa lub więcej tytułów finalisty konkursu tematycznego lub interdyscyplinarnego –&nbsp;&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">5 punktów,</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">?d) tytuł finalisty konkursu</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">&nbsp;przedmiotowego –&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">7 punktów</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">,</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">e) tytuł laureata konkursu tematycznego lub interdyscyplinarnego –&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">5 punktów,</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">f) tytuł finalisty konkursu tematycznego lub interdyscyplinarnego –&nbsp;&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">3 punkty</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">Zawody wiedzy&nbsp;</span></span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">będące konkursem albo turniejem, o&nbsp;</span></span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">zasięgu ponadwojewódzkim lub wojewódzkim</span></span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">&nbsp;przeprowadzonym zgodnie z przepisami wydanymi na podstawie art. 22 ust 6 ustawy o systemie ośwaity</span></span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">:</span></span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">a) dwa lub więcej tytułów finalisty konkursu z przedmiotu lub przedmiotów artystycznych objętych ramowym planem nauczania szkoły artystycznej –&nbsp;&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">10 punktów</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">,</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">b) dwa lub więcej tytułów laureata turnieju z przedmiotu lub przedmiotów artystycznych nieobjętych ramowym planem nauczania szkoły artystycznej –&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">7 punktów,</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">c) dwa lub więcej tytułów finalisty turnieju z przedmiotu lub przedmiotów artystycznych nieobjętych ramowym planem nauczania szkoły artystycznej –&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">5 punktów,</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">d) tytułu finalisty konkursu z przedmiotu lub przedmiotów artystycznych objętych ramowym planem nauczania szkoły artystycznej – 7&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">punktów,</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">e) tytułu laureata turnieju z przedmiotu lub przedmiotów artystycznych nieobjętych ramowym planem nauczania szkoły artystycznej –&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">3 punkty,</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">f) tytułu finalisty turnieju z przedmiotu lub przedmiotów artystycznych nieobjętych ramowym planem nauczania szkoły artystycznej –&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">2 punkty</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">Uzyskanie wysokiego miejsca w&nbsp;</span></span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">zawodach wiedzy&nbsp;</span></span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">innych niż wymienione wyżej,&nbsp;</span></span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">artystycznych lub sportowych&nbsp;</span></span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">organizowanych przez kuratora oświaty lub inne podmioty działające na terenie szkoły, na szczeblu:</span></span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">a) międzynarodowym –&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">4 punkty</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">,</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">b) krajowym –&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">3 punkty</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">,</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">c) wojewódzkim –&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">2 punkty</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">,</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">d) powiatowym –&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">1 punkt</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">W przypadku gdy kandydat ma więcej niż jedno szczególne osiągnięcie z takich samych zawodów wiedzy, artystycznych i sportowych, o których mowa w ust. 1, na tym samym szczeblu oraz z tego samego zakresu, wymienione na świadectwie ukończenia szkoły podstawowej, przyznaje się jednorazowo punkty za najwyższe osiągnięcie tego ucznia w tych zawodach, z tym że maksymalna liczba punktów możliwych do uzyskania za wszystkie osiągnięcia wynosi 18 punktów.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Za osiągnięcia w zakresie aktywności społecznej, w tym na rzecz środowiska szkolnego, w szczególności w formie wolontariatu przyznaje się&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">3 punkty</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">Aby za osiągnięcie kandydat otrzymał punkty musi ono zostać wpisane na świadectwo ukończenia szkoły podstawowej.</span></span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">O wpisie osiągnięć na świadectwo decyduje&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">dyrektor szkoły podstawowej.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Przeliczanie&nbsp; na punkty ocen&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">z języka polskiego i matematyki wymienionych na świadectwie ukończenia szkoły podstawowej w przypadku&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">osób zwolnionych z obowiązku przystąpienia do sprawdzianu ósmoklasisty</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">:&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">a) za ocenę celującą – po&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">35 punktów</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">,</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">b) za ocenę bardzo dobrą – po&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">30 punktów</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">,</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">c) za ocenę dobrą – po&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">25 punktów</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">,</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">d) za ocenę dostateczną – po&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">15 punktów</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">,</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">e) za ocenę dopuszczającą – po&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">10 punktów.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">z języka obcego nowożytnego:</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">a) za ocenę celującą –&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">30 punktów</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">,</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">b) za ocenę bardzo dobrą –&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">25 punktów</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">,</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">c) za ocenę dobrą –&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">20 punktów</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">,</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">d) za ocenę dostateczną –&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">10 punktów</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">,</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">e) za ocenę dopuszczającą –&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">5 punktów.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Laureat lub finalista ogólnopolskiej olimpiady&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">przedmiotowej oraz&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">laureat konkursu przedmiotowego&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">o zasięgu wojewódzkim lub ponadwojewódzkim są przyjmowani&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">w pierwszej kolejności&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">do publicznej szkoły ponadpodstawowej, szkoły ponadpodstawowej sportowej, publicznej szkoły ponadpodstawowej mistrzostwa sportowego, oddziału sportowego w publicznej szkole ponadpodstawowej ogólnodostępnej lub oddziału mistrzostwa sportowego w publicznej szkole ponadpodstawowej ogólnodostępnej*.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">*&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">w przypadku szkoły lub oddziału sportowego konieczne jest uzyskanie pozytywnego wyniku prób sprawności fizycznej; w przypadku kandydatów do szkoły prowadzącej kształcenie zawodowe – kandydaci muszą posiadać zaświadczenie lekarskie zawierające orzeczenie o braku przeciwwskazań zdrowotnych do podjęcia praktycznej nauki zawodu</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">W przypadku większej liczby kandydatów niż liczba wolnych miejsc w szkole, na pierwszym etapie postępowania&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">rekrutacyjnego brane są</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">&nbsp;pod uwagę łącznie następujące kryteria:&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">1) wyniki egzaminu ósmoklasisty;&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">2) wymienione na świadectwie ukończenia szkoły podstawowej oceny z języka polskiego i matematyki oraz z dwóch obowiązkowych zajęć edukacyjnych ustalonych przez dyrektora danej szkoły jako brane pod uwagę w postępowaniu rekrutacyjnym do danego oddziału;&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">3) świadectwo ukończenia szkoły podstawowej z wyróżnieniem;&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">4) szczególne osiągnięcia wymienione na świadectwie ukończenia szkoły podstawowej:&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">a) uzyskanie wysokiego miejsca nagrodzonego lub uhonorowanego zwycięskim tytułem w zawodach wiedzy, artystycznych i sportowych, organizowanych przez kuratora oświaty albo organizowanych co najmniej na szczeblu powiatowym przez inne podmioty działające na terenie szkoły,&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">b) osiągnięcia w zakresie aktywności społecznej, w tym na rzecz środowiska szkolnego, w szczególności w formie wolontariatu;&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">5) w przypadku kandydatów ubiegających się o przyjęcie do oddziałów dwujęzycznych – wyniki sprawdzianu kompetencji językowych, do oddziałów sportowych – testy sprawności, do oddziałów&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">wymagających szczególnych indywidualnych predyspozycji – wyniki sprawdzianu uzdolnień kierunkowych,</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">W przypadku równorzędnych wyników uzyskanych na pierwszym etapie postępowania rekrutacyjnego, na drugim etapie postępowania rekrutacyjnego przyjmuje się kandydatów z problemami zdrowotnymi, ograniczającymi możliwości wyboru kierunku kształcenia ze względu na stan zdrowia, potwierdzonymi opinią publicznej poradni psychologiczno-pedagogicznej, w tym publicznej poradni specjalistycznej.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">W przypadku równorzędnych wyników uzyskanych na&nbsp;</span><span class="TextRun Underlined  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL"><span class="NormalTextRun  BCX0 SCXW159506507">drugim etapie</span></span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">&nbsp;postępowania rekrutacyjnego lub jeżeli po zakończeniu tego etapu dana szkoła, nadal dysponuje wolnymi miejscami, na trzecim etapi</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">e postępowania rekrutacyjnego&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">brane&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">są&nbsp;</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">pod uwagę łącznie następujące kryteria:&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">1) wielodzietność rodziny kandydata;&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">2) niepełnosprawność kandydata;&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">3) niepełnosprawność jednego z rodziców kandydata;&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">4) niepełnosprawność obojga rodziców kandydata;&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">5) niepełnosprawność rodzeństwa kandydata;&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">6) samotne wychowywanie kandydata w rodzinie;&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">7) objęcie kandydata pieczą zastępczą.</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">PROCEDURA ODWOŁAWCZA&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">W terminie 7 dni od dnia podania do publicznej wiadomości listy kandydatów przyjętych i kandydatów nieprzyjętych, rodzic kandydata lub kandydat pełnoletni może wystąpić do komisji rekrutacyjnej z wnioskiem o sporządzenie uzasadnienia odmowy przyjęcia kandydata do danej szkoły. Uzasadnienie sporządza się w terminie 5 dni od dnia wystąpienia przez rodzica kandydata lub kandydata pełnoletniego z wnioskiem. Uzasadnienie zawiera przyczyny odmowy przyjęcia, w tym najniższą liczbę punktów, która uprawniała do przyjęcia, oraz liczbę punktów, którą kandydat uzyskał w postępowaniu rekrutacyjnym.&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Rodzic kandydata lub kandydat pełnoletni może wnieść do dyrektora szkoły odwołanie od rozstrzygnięcia komisji rekrutacyjnej, w terminie 7 dni od dnia otrzymania uzasadnienia.&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">Dyrektor szkoły rozpatruje odwołanie od rozstrzygnięcia komisji rekrutacyjnej w terminie 7 dni od dnia otrzymania odwołania. Na rozstrzygnięcie dyrektora szkoły służy skarga do sądu administracyjnego.</span><span class="TextRun  BCX0 SCXW159506507" lang="PL-PL" xml:lang="PL-PL">&nbsp;</span><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div>
<div class="OutlineElement Ltr  BCX0 SCXW159506507">
<p class="Paragraph  BCX0 SCXW159506507"><span class="EOP  BCX0 SCXW159506507">&nbsp;</span></p>
</div></div>`;

const Recrutation: React.FC<any> = () => {
  return (
    <CategoryLayout title="Proces Rekrutacji">
      <div className="flex flex-col lg:flex-row">
        <div>
          <img src={RecrutationImage} alt="Recrutation" />
          <div dangerouslySetInnerHTML={{ __html: givenCode }} />
        </div>
      </div>
    </CategoryLayout>
  );
};

export default Recrutation;

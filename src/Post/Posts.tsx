import { useHistory } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

import React from 'react'
import Layout from '../layout/Layout'
//TOOD Connect to posts grapsql api https://vpilip.com/how-build-simple-pagination-in-nextjs/

const Posts = () => {

    //Mock values to paginations
    const currentPage = 0
    const pageCount = 10

    const history  = useHistory()

    const pagginationHandler = () => {}

    const onClick = () => {
        history.goBack()
    }

    return (
        <Layout>
                 <div className="min-h-screen flex flex-col justify-center items-center mt-20">
                 <div className="flex flex-row space-between pb-20 pt-20 w-8/12 justify-between">
                 <h1 className="uppercase text-2xl font-extrabold" style={{
                        color: '#3559A4'
                    }}>Aktualnośći</h1>
                    <div>
                        <p className="font-extrabold text-lg cursor-pointer" onClick={onClick}>Powrót</p>
                    </div>
                 </div>
                    <div className="w-auto flex flex-col items-center w-8/12 ">
                       <h1 className="text-2xl leading-relaxed">KOMUNIKAT DYREKTORA ZESPOŁU SZKÓŁ NR 1 W SPRAWIE PRZEPROWADZANIA EGZAMINÓW ZAWODOWYCH</h1> 
                       <p className="leading-relaxed pt-3 pb-5 ">
                                

                        Na podstawie rozporządzenia MEN zmieniającego rozporządzenie w sprawie czasowego ograniczenia funkcjonowania jednostek systemu oświaty w związku z zapobieganiem, przeciwdziałaniem i zwalczaniem COVID-19 Rozporządzenie Ministra Edukacji i Nauki z dnia 23 października 2020 r.  zmieniające rozporządzenie w sprawie czasowego ograniczenia funkcjonowania jednostek systemu oświaty w związku z zapobieganiem, przeciwdziałaniem i zwalczaniem COVID-19 oraz komunikatu MEN z 4 listopada 2020r. od 9 listopada do 29 listopada 2020r. zajęcia dla uczniów: Liceum Ogólnokształcącego, Technikum i Branżowej Szkoły, są nadal realizowane z wykorzystaniem metod i technik kształcenia na odległość.
                        <br />
                        Realizacja podstawy programowej w sposób zdalny poprzez platformę Office365 aplikacja Teams.
                        Dla uczniów ostatnich klas 4-letniego technikum, którzy w zimowej sesji egzaminacyjnej (styczeń-luty 2021 r.) będą zdawali końcowy egzamin potwierdzający kwalifikacje w zawodzie, w okresie do 29 listopada br. dyrektor wprowadza prowadzenie części zajęć praktycznych stacjonarnie na terenie szkoły. Zajęcia te będą realizowane w grupach, w wybranych dniach tygodnia, w wymiarze nieprzekraczającym 10 godz. w tygodniu /uwaga na małą modyfikację planu lekcji dokonaną przez wychowawców/:
                        <br />
                        Klasa 4 GDR – środa 5 godzin od 8.00 do 12.30 - grupy p. AT i p. TM /fizyka wt, czw godz. 8.00/
                        <br />
                        Klasa 4 BUD – środa 4 godziny; gr. 1 od 8.00, gr. 2 od 12.00 - /fizyka pn na 5 lekcji, godz. wych. pn 4 lekcja/
                        <br />
                        Klasa 4 TUF – piątek 8 godzin od 8.00
                        <br />
                        Klasa 4 KL – piątek 5 godzin od 8.00
                        <br />
                        Klasa 4 INF B – wtorek 8 godzin od 8.00 - gr 1 lab. baz danych 4 godz + laboratorium aplik. 4 godz
                        <br />
                                                                                    - gr 2 laboratorium aplik. 4 godz + lab. baz danych 4 godz
                                                                                    <br />
                        Klasa 4 INF A - środa /w przyszłym tygodniu wyjątkowo nie w śr 11 a 12 listopada tj w czwartek/
                        <br />
                        - gr 1 lab. baz danych 4 godz + laboratorium aplik. 4 godz
                        <br />
                        <br />
                                                                              - gr 2 laboratorium aplik. 4 godz + lab. baz danych 4 godz
                                                                              <br />
                        W w/w okresie nie funkcjonuje: hala sportowa, biblioteka, MCI, boisko Orlik.
                        Zajęcia odbywają się zgodnie z dotychczasowym planem lekcji i zachowaniem przerw.
                        Nauczyciele sprawdzają listę obecności uczniów. Każdy uczeń loguje się na początku lekcji, czym potwierdza swoją obecność.
                        Ilość i zakres materiału dydaktycznego jest dostosowana do pracy na lekcji tradycyjnej.
                        Wiedza ucznia oraz postępy w nauce są monitorowane na bieżąco i oceniane w dzienniku.
                        Uczniowie objęci kształceniem specjalnym zachowują ustalone z nimi oraz z rodzicami dostosowania wg. dotychczasowych zasad.
                        Nauczyciele i pedagodzy prowadzący zajęcia z rewalidacji i inne z pomocy psychologiczno – pedagogicznej (m.in. nauczyciele wspierający proces kształcenia) kontynuują pracę metodami zdalnymi w czasie uzgodnionym z rodzicami i uczniami.
                        <br />
                        10.  Wychowawcy monitorują prowadzenie zajęć w swoich klasach, kontaktują się z nauczycielem, jeśli zachodzi taka potrzeba, informują dyrektora/wicedyrektorów o problemach.
                        <br />
                        11.  Uczniom, którzy z uwagi na rodzaj niepełnosprawności lub np. warunki domowe /np. brak internetu w domu/ nie mogą realizować zajęć w formie zdalnej, dyrektor umożliwia udział w zajęciach na terenie szkoły. Potrzebę takiej formy proszę uzgadniać z wychowawcą lub dyrektorem.
                        <br />
                        12.  W okresie od 9 do 29 listopada br. uczniowie branżowych szkół I stopnia będący  młodocianymi pracownikami są zwolnieni z obowiązku  świadczenia pracy na mocy art. 15f specustawy z dnia 2 marca 2020 r. o szczególnych rozwiązaniach związanych z COVID-19.
                        <br />
                        13.  Nauczyciele przestrzegają zasad „Ochrony danych osobowych podczas pracy zdalnej”.
                        <br />
                        14.  Dyrektor Szkoły zobowiązuje wszystkich nauczycieli do dokumentowania pracy w dzienniku elektronicznym w czasie zgodnym z planem lekcji.
                        <br />
                        15.  Dyrektor Szkoły zobowiązuje wychowawców do koordynowania zdalnego nauczania w klasie we współpracy z nauczycielami uczącymi w oddziale i rodzicami.
                        <br />
                        16.  Dyrektor/wicedyrektor przekazuje rodzicom ogólne informacje przez stronę internetową szkoły, a indywidualne – przez dziennik elektroniczny.
                        <br />
                        17.  Sprawy potrzebnych zaświadczeń lub innych dokumentów załatwiamy tradycyjnie w szkole w terminach uzgodnionych telefonicznie /tel. 25 758 25 64/. Kontakt z dyrektorem 512 708 300 lub dyrektor@zs1mm.edu.pl
                        więcej                                                  
                        </p>
                        <div className="pt-5 pb-5 text-sm md:text-lg ">
                            <ReactPaginate
                                previousLabel={'previous'}
                                nextLabel={'next'}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                activeClassName={'active'}
                                containerClassName={'pagination'}
                                initialPage={currentPage - 1}
                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={1}
                                onPageChange={pagginationHandler}
                        />                         
                        </div>
                </div>
                </div>
        </Layout>
    )
}

export default Posts
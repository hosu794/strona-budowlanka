import * as React from "react";
import Layout from "../../Layout";

import LibraryImage from "../../../assets/bought-books.jpg";
import InfluenceImage from "../../../assets/influence-reading-on-kids.jpg";

const Library = () => {
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
            Biblioteka
          </h1>
          <div>
            <p className="font-extrabold text-lg cursor-pointer">Powrót</p>
          </div>
        </div>
        <div className="w-auto flex flex-col items-center w-8/12">
          <div>
            <h1>Narodowy Program Rozwoju czytelnictwa</h1>

            <table className="table-auto border-4">
              <thead>
                <tr>
                  <th className="border-4 pb-3 pt-3 pl-8 pr-8">Dni tygodnia</th>
                  <th className="border-4 pb-3 pt-3 pl-8 pr-8">
                    Wypożyczalnia
                  </th>
                  <th className="border-4 pb-3 pt-3 pl-8 pr-8">Czytelnia</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-4">
                  <td className="pb-3 pt-3 pl-8 pr-8 border-4">Poniedziałek</td>
                  <td className="pb-3 pt-3 pl-8 pr-8 border-4">8.00 - 15.30</td>
                  <td className="pb-3 pt-3 pl-8 pr-8 border-4">
                    7.45 - 16.30{" "}
                  </td>
                </tr>
                <tr className="border-4">
                  <td className="pb-3 pt-3 pl-8 pr-8 border-4">Wtorek</td>
                  <td className="pb-3 pt-3 pl-8 pr-8 border-4">8.00 - 15.30</td>
                  <td className="pb-3 pt-3 pl-8 pr-8 border-4">7.45 - 16.30</td>
                </tr>
                <tr className="border-4">
                  <td className="pb-3 pt-3 pl-8 pr-8 border-4">Środa</td>
                  <td className="pb-3 pt-3 pl-8 pr-8 border-4">8.00 - 16.00</td>
                  <td className="pb-3 pt-3 pl-8 pr-8 border-4">7.45 - 16.30</td>
                </tr>
                <tr className="border-4">
                  <td className="pb-3 pt-3 pl-8 pr-8 border-4">Czwartek</td>
                  <td className="pb-3 pt-3 pl-8 pr-8 border-4">8.00 - 15.30</td>
                  <td className="pb-3 pt-3 pl-8 pr-8 border-4">7.45 - 16.30</td>
                </tr>
                <tr className="border-4">
                  <td className="pb-3 pt-3 pl-8 pr-8 border-4">Piątek</td>
                  <td className="pb-3 pt-3 pl-8 pr-8 border-4">8.00 - 15.30</td>
                  <td className="pb-3 pt-3 pl-8 pr-8 border-4">7.45 - 16.30</td>
                </tr>
              </tbody>
            </table>
            <span>
              W ramach realizacji projektu Narodowego Programu Rozwoju
              Czytelnictwa zakupiliśmy książki i audiobooki na kwotę 15 tys. zł.
              Księgozbiór naszej szkolnej biblioteki wzbogacił się o 396 egz.
              literatury pięknej i popularnonaukowej (kryminały, thrillery,
              fantastyka, biografie, powieści podróżnicze,
              społeczno-obyczajowe...); 441 egz. lektur szkolnych; 13
              audiobooków.
            </span>
            <img src={LibraryImage} alt="Library" />
            <span>
              <a href="#">Wykaz zakupionych książek</a>
            </span>
            <img src={InfluenceImage} alt="influence reading on kids" />

            <span>Wypożyczalnia</span>
            <ul className="ml-5 p-2">
              <li>Biblioteka załącznikowa</li>
              <li>Nowości</li>
              <li>Lektury</li>
              <li>Lektury on-line</li>
              <li>Jak się uczyć</li>
              <li>Skarby Bilioteki</li>
              <li>Regulamin Biblioteki</li>
              <li>Nagrody Literackie</li>
            </ul>
            <span>Katalog online</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Library;

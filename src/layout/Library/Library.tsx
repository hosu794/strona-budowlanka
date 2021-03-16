import * as React from "react";

import LibraryImage from "../../assets/bought-books.jpg";
import InfluenceImage from "../../assets/influence-reading-on-kids.jpg";
import CategoryLayout from "../CategoryLayout";

const Library = () => {
  return (
    <CategoryLayout title="Biblioteka">
      <h1 className="text-2xl font-bold pb-5">
        Narodowy Program Rozwoju czytelnictwa
      </h1>
      <table className="w-32 sm:w-full border-4 md:m-5">
        <thead>
          <tr>
            <th className="border-4 pb-1 pt-1 pl-1 pr-1 md:pb-3 md:pt-3 md:pl-8 md:pr-8">
              Dni tygodnia
            </th>
            <th className="border-4 pb-1 pt-1 pl-1 pr-1 md:pb-3 md:pt-3 md:pl-8 md:pr-8">
              Wypożyczalnia
            </th>
            <th className="border-4 pb-1 pt-1 pl-1 pr-1 md:pb-3 md:pt-3 md:pl-8 md:pr-8">
              Czytelnia
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-4">
            <td className="md:pb-3 md:pt-3 md:pl-8 md:pr-8 border-4 pb-1 pt-1 pl-1 pr-1">
              Poniedziałek
            </td>
            <td className="md:pb-3 md:pt-3 md:pl-8 md:pr-8 border-4 pb-1 pt-1 pl-1 pr-1">
              8.00 - 15.30
            </td>
            <td className="md:pb-3 md:pt-3 md:pl-8 md:pr-8 border-4 pb-1 pt-1 pl-1 pr-1">
              7.45 - 16.30{" "}
            </td>
          </tr>
          <tr className="border-4">
            <td className="md:pb-3 md:pt-3 md:pl-8 md:pr-8 border-4 pb-1 pt-1 pl-1 pr-1">
              Wtorek
            </td>
            <td className="md:pb-3 md:pt-3 md:pl-8 md:pr-8 border-4 pb-1 pt-1 pl-1 pr-1">
              8.00 - 15.30
            </td>
            <td className="md:pb-3 md:pt-3 md:pl-8 md:pr-8 border-4 pb-1 pt-1 pl-1 pr-1">
              7.45 - 16.30
            </td>
          </tr>
          <tr className="border-4">
            <td className="md:pb-3 md:pt-3 md:pl-8 md:pr-8 border-4 pb-1 pt-1 pl-1 pr-1">
              Środa
            </td>
            <td className="md:pb-3 md:pt-3 md:pl-8 md:pr-8 border-4 pb-1 pt-1 pl-1 pr-1">
              8.00 - 16.00
            </td>
            <td className="md:pb-3 md:pt-3 md:pl-8 md:pr-8 border-4 pb-1 pt-1 pl-1 pr-1">
              7.45 - 16.30
            </td>
          </tr>
          <tr className="border-4">
            <td className="md:pb-3 md:pt-3 md:pl-8 md:pr-8 border-4 pb-1 pt-1 pl-1 pr-1">
              Czwartek
            </td>
            <td className="md:pb-3 md:pt-3 md:pl-8 md:pr-8 border-4 pb-1 pt-1 pl-1 pr-1">
              8.00 - 15.30
            </td>
            <td className="md:pb-3 md:pt-3 md:pl-8 md:pr-8 border-4 pb-1 pt-1 pl-1 pr-1">
              7.45 - 16.30
            </td>
          </tr>
          <tr className="border-4">
            <td className="md:pb-3 md:pt-3 md:pl-8 md:pr-8 border-4 pb-1 pt-1 pl-1 pr-1">
              Piątek
            </td>
            <td className="md:pb-3 md:pt-3 md:pl-8 md:pr-8 border-4 pb-1 pt-1 pl-1 pr-1">
              8.00 - 15.30
            </td>
            <td className="md:pb-3 md:pt-3 md:pl-8 md:pr-8 border-4 pb-1 pt-1 pl-1 pr-1">
              7.45 - 16.30
            </td>
          </tr>
        </tbody>
      </table>
      <span>
        W ramach realizacji projektu Narodowego Programu Rozwoju Czytelnictwa
        zakupiliśmy książki i audiobooki na kwotę 15 tys. zł. Księgozbiór naszej
        szkolnej biblioteki wzbogacił się o 396 egz. literatury pięknej i
        popularnonaukowej (kryminały, thrillery, fantastyka, biografie, powieści
        podróżnicze, społeczno-obyczajowe...); 441 egz. lektur szkolnych; 13
        audiobooków.
      </span>
      <img src={LibraryImage} className="p-5" alt="Library" />
      <span>
        <a href="#" className="font-bold text-2xl">
          Wykaz zakupionych książek
        </a>
      </span>
      <img
        src={InfluenceImage}
        className="p-5"
        alt="influence reading on kids"
      />

      <div className="p-5">
        {" "}
        <span className="font-bold text-2xl">Wypożyczalnia</span>
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
    </CategoryLayout>
  );
};

export default Library;

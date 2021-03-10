import * as React from "react";

import LibraryImage from "../../assets/bought-books.jpg";
import InfluenceImage from "../../assets/influence-reading-on-kids.jpg";
import CategoryLayout from "../CategoryLayout";
import Layout from "../Layout";

const Library = () => {
  return (
    <CategoryLayout title="Biblioteka">
      <h1>Narodowy Program Rozwoju czytelnictwa</h1>

      <table className="table-auto border-4">
        <thead>
          <tr>
            <th className="border-4 pb-3 pt-3 pl-8 pr-8">Dni tygodnia</th>
            <th className="border-4 pb-3 pt-3 pl-8 pr-8">Wypożyczalnia</th>
            <th className="border-4 pb-3 pt-3 pl-8 pr-8">Czytelnia</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-4">
            <td className="pb-3 pt-3 pl-8 pr-8 border-4">Poniedziałek</td>
            <td className="pb-3 pt-3 pl-8 pr-8 border-4">8.00 - 15.30</td>
            <td className="pb-3 pt-3 pl-8 pr-8 border-4">7.45 - 16.30 </td>
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
        W ramach realizacji projektu Narodowego Programu Rozwoju Czytelnictwa
        zakupiliśmy książki i audiobooki na kwotę 15 tys. zł. Księgozbiór naszej
        szkolnej biblioteki wzbogacił się o 396 egz. literatury pięknej i
        popularnonaukowej (kryminały, thrillery, fantastyka, biografie, powieści
        podróżnicze, społeczno-obyczajowe...); 441 egz. lektur szkolnych; 13
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
    </CategoryLayout>
  );
};

export default Library;

import * as React from "react";

import EducationImage from "../../assets/education.svg";

import CategoryLayout from "../CategoryLayout";

const EducationOffer = () => {
  return (
    <CategoryLayout title="Oferta Edukacyjna">
      <h2 className="uppercase font-bold pb-3 ">Liceum Ogólnokształcące</h2>

      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-10 sm:mb-0">
          <ul className="p-3">
            <li>Klasa wojskowa</li>
            <li>Klasa prawna</li>
            <li>Klasa psychologiczna</li>
            <li>Klasa sportowa</li>
          </ul>

          <h2 className="uppercase font-bold pb-3">Technikum</h2>
          <ul className="p-3">
            <li className="li">Technik informatyk</li>
            <li className="li">Technik przemysły mody</li>
            <li className="li">Technik robót wykończeniowych w budownictwie</li>
            <li className="li">Technik chłodnictwa i klimatyzacji</li>
            <li className="li">Technik budowy dróg</li>
            <li className="li">Technik geodeta</li>
            <li className="li">Technik budownictwa</li>
            <li className="li">Technik usług fryzjerskich</li>
          </ul>

          <h2 className="uppercase font-bold pb-3">Branżowa szkoła</h2>
          <ul className="p-3">
            <li>Monter sieci i instalacji sanitarnych</li>
            <li>Monter zabudowych i robót wykończeniowych</li>
            <li>Fryzjer</li>
            <li>Stolarz</li>
          </ul>

          <h2 className="uppercase font-bold pb-3">Internat</h2>
        </div>

        <div className="mb-10 sm:mb-10">
          <img src={EducationImage} alt="education" />
        </div>
      </div>
    </CategoryLayout>
  );
};

export default EducationOffer;

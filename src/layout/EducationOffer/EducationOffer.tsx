import * as React from "react";

import { useHistory } from "react-router";
import Layout from "../Layout";
import * as H from "history";
import CategoryLayout from "../CategoryLayout";

const EducationOffer = () => {
  const history: H.History<any> = useHistory();

  const onClick = (): void => {
    history.goBack();
  };

  return (
    <CategoryLayout title="Oferta Edukacyjna">
      <h1 className="uppercase text-2xl">Oferta edukacyjna</h1>

      <h2 className="uppercase">Liceum Ogólnokształcące</h2>
      <ul>
        <li>Klasa wojskowa</li>
        <li>Klasa prawna</li>
        <li>Klasa psychologiczna</li>
        <li>Klasa sportowa</li>
      </ul>

      <h2 className="uppercase">Technikum</h2>
      <ul className="li">Technik informatyk</ul>
      <ul className="li">Technik robót wykończeniowych w budownictwie</ul>
      <ul className="li">Technik przemysły mody</ul>
      <ul className="li">Technik chłodnictwa i klimatyzacji</ul>
      <ul className="li">Technik budowy dróg</ul>
      <ul className="li">Technik geodeta</ul>
      <ul className="li">Technik budownictwa</ul>
      <ul className="li">Technik usług fryzjerskich</ul>

      <h2 className="uppercase">Branżowa szkoła</h2>
      <ul>
        <li>Monter sieci i instalacji sanitarnych</li>
        <li>Monter zabudowych i robót wykończeniowych</li>
        <li>Fryzjer</li>
        <li>Stolarz</li>
      </ul>

      <h2 className="uppercase">Internat</h2>
    </CategoryLayout>
  );
};

export default EducationOffer;

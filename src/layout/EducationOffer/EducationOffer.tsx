import * as React from "react";

import { useHistory } from "react-router";
import Layout from "../Layout";
import * as H from "history";

const EducationOffer = () => {
  const history: H.History<any> = useHistory();

  const onClick = (): void => {
    history.goBack();
  };

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
            Oferta edukacyjna
          </h1>
          <div>
            <p
              onClick={onClick}
              className="font-extrabold text-lg cursor-pointer"
            >
              Powrót
            </p>
          </div>
        </div>
        <div className="w-auto flex flex-col w-8/12">
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
        </div>
      </div>
    </Layout>
  );
};

export default EducationOffer;

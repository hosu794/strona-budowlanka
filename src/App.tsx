import React from "react";
import "./styles/index.css";
import CookieConsent from "react-cookie-consent";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Posts from "./Post/Posts";
import Gallery from "./Gallery/Gallery";
import Library from "./layout/Library/Library";
import MentalHelp from "./layout/MentalHelp/MentalHelp";
import EducationOffer from "./layout/EducationOffer/EducationOffer";
import Contact from "./layout/Contact/Contact";
import NotFound from "./layout/NotFound";
import Recrutation from "./layout/Recruitation/Recrutation";
import GalleryFolderMedias from "./Gallery/GalleryFolderMedias";
import Subsite from "./layout/Subsites/Subsite";
import Home from "./layout/MainPage";
import SchoolSubsite from "./layout/Subsites/SchoolSubsite";
import RecruitationSubsite from "./layout/Subsites/RecruitationSubsite";
import ContactSubsite from "./layout/Subsites/ContactSubsite";
import ProcedureSubsite from "./layout/Subsites/ProcedureSubsite";
import RecruitationProcedureSubsite from "./layout/Subsites/RecruitatioProcedureSubsite";
import PostPage from "./Post/PostPage";
import PostSubsite from "./Post/PostSubsite";

const App: React.FC<any> = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route component={PostSubsite} exact path="/post/:id" />
          <Route component={Subsite} exact path="/subsite/:id/:category" />
          <Route component={SchoolSubsite} exact path="/school/subsite/:id" />
          <Route
            component={RecruitationSubsite}
            exact
            path="/recruitation/subsite/:id"
          />
          <Route
            component={RecruitationProcedureSubsite}
            exact
            path="/recruitation/procedures/subsite/:id"
          />
          <Route
            component={ProcedureSubsite}
            exact
            path="/procedure/subsite/:id"
          />
          <Route component={ContactSubsite} exact path="/contact/subsite/:id" />
          <Route component={Home} exact path="/" />
          <Route component={Posts} exact path="/posts" />
          <Route component={Gallery} exact path="/gallery" />
          <Route
            component={GalleryFolderMedias}
            exact
            path="/gallery/folder/:id"
          />
          <Route component={Library} exact path="/library" />
          <Route component={MentalHelp} exact path="/help" />
          <Route component={EducationOffer} exact path="/education-offer" />
          <Route component={Contact} exact path="/contact" />
          <Route component={Recrutation} exact path="/recrutation" />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <CookieConsent
        overlay
        location="bottom"
        buttonText="Wyrażam zgodę"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        debug={false}
      >
        <span className="text-sm">
          Używamy cookies i podobnych technologii m.in. w celach: świadczenia
          usług, reklamy, statystyk. Korzystanie z witryny bez zmiany ustawień
          Twojej przeglądarki oznacza, że będą one umieszczane w Twoim
          urządzeniu końcowym. Pamiętaj, że zawsze możesz zmienić te ustawienia.
          Szczegóły znajdziesz w Polityce Prywatności.
        </span>
      </CookieConsent>
    </div>
  );
};

export default App;

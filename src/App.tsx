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
import PostSubsite from "./Post/PostSubsite";
import DropdownContactNavbar from "./layout/Navbar/Dropdown/DropdownContactNavbar";
import DropdownContactSubsite from "./layout/Navbar/Dropdown/DropdownContactSubsite";
import DropdownSchoolNavbar from "./layout/Navbar/Dropdown/DropdownSchoolNavbar";
import DropdownSchoolSubsite from "./layout/Navbar/Dropdown/DropdownSchoolSubsite";
import DropdownRecruitationSubsite from "./layout/Navbar/Dropdown/DropdownRecruitationSubsite";
import { useEffect } from "react";
import DropdownJournalSubsite from "./layout/Navbar/Dropdown/DropdownJournalSubsite";
import JournalSubsite from "./layout/Subsites/JournalSubiste";

const App: React.FC<any> = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route component={PostSubsite} exact path="/post/:id" />
          <Route component={Subsite} exact path="/subsite/:id/:category" />
          <Route component={SchoolSubsite} exact path="/school/subsite/:id" />
          <Route
            component={DropdownContactSubsite}
            exact
            path="/dropdown/contact/:id"
          />
          <Route
            component={DropdownSchoolSubsite}
            exact
            path="/dropdown/school/:id"
          />
          <Route
            component={DropdownRecruitationSubsite}
            exact
            path="/dropdown/recruitation/:id"
          />
          <Route
            component={DropdownJournalSubsite}
            exact
            path="/dropdown/journal/:id"
          />
          <Route
            component={RecruitationSubsite}
            exact
            path="/recruitation/subsite/:id"
          />
          <Route component={JournalSubsite} exact path="/journal/subsite/:id" />
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
      {/* <CookieConsent
        overlay
        location="bottom"
        buttonText="Wyra??am zgod??"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        debug={false}
      >
        <span className="text-sm">
          U??ywamy cookies i podobnych technologii m.in. w celach: ??wiadczenia
          us??ug, reklamy, statystyk. Korzystanie z witryny bez zmiany ustawie??
          Twojej przegl??darki oznacza, ??e b??d?? one umieszczane w Twoim
          urz??dzeniu ko??cowym. Pami??taj, ??e zawsze mo??esz zmieni?? te ustawienia.
          Szczeg????y znajdziesz w Polityce Prywatno??ci.
        </span>
      </CookieConsent> */}
    </div>
  );
};

export default App;

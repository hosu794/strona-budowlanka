import React from 'react'
import './styles/index.css'
import CookieConsent from 'react-cookie-consent'

import {HashRouter  as Router, Route} from 'react-router-dom'
import Home from './layout/MainPage'
import Posts from './Post/Posts'
const App = () => {
  return(
   <div>
      <Router>
      <Route component={Home} exact path="/" />
      <Route component={Posts} exact path="/posts" />
    </Router>
    <CookieConsent
      overlay
      location="bottom"
      buttonText="Wyrażam zgodę"
      cookieName="myAwesomeCookieName2"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
      debug={true}
    >
  <span className="text-sm">Używamy cookies i podobnych technologii m.in. w celach: świadczenia usług, reklamy, statystyk. Korzystanie z witryny bez zmiany ustawień Twojej przeglądarki oznacza, że będą one umieszczane w Twoim urządzeniu końcowym. Pamiętaj, że zawsze możesz zmienić te ustawienia. Szczegóły znajdziesz w Polityce Prywatności.</span>
  </CookieConsent>
   </div>
  )
}

export default App;
import React from 'react'
import './styles/index.css'

import Layout from './layout/Layout'

import {BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom'
const App = () => {
  return(
 
   <div>
      <BrowserRouter>
     <Layout>
      <Route component={SomeComponent} exact path="/" />
      </Layout>
    </BrowserRouter>
   </div>
  )
}

export default App;


const SomeComponent = () => (
  <React.Fragment>
    <h1>component</h1>
  </React.Fragment>
)
import React from 'react'
import './styles/index.css'

import Layout from './layout/Layout'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './layout/MainPage'
import Post from './Post/Posts'
import Posts from './Post/Posts'
const App = () => {
  return(
 
   <div>
      <Router>
     <Layout>
      <Route component={Home} exact path="/" />
      <Route component={Posts} exact path="/posts" />
      </Layout>
    </Router>
   </div>
  )
}

export default App;
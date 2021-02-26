import React from 'react'
import './styles/index.css'

import Layout from './layout/Layout'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './layout/MainPage'
import Post from './Post/Post'
const App = () => {
  return(
 
   <div>
      <Router>
     <Layout>
      <Route component={Home} exact path="/" />
      <Route component={Post} exact path="/posts/:id" />
      </Layout>
    </Router>
   </div>
  )
}

export default App;
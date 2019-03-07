import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Layout from './components/Layout'

// Router register
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'

// Components
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import Book from './components/Book/Book'

const Routes = () => (
  <Router>
    <Layout>

      {/* Rotas públicas e privadas */}
      <Route path='/u/:username/:option?' component={Dashboard} />

      {/* Rotas públicas */}
      <PublicRoute path='/' component={Home} />
      <PublicRoute path='/login' component={Login} />

      {/* Rotas privadas */}
      <PrivateRoute path='/dashboard' component={Dashboard} />
      <PrivateRoute path='/dashboard/:option' component={Dashboard} />
      <PrivateRoute path='/book/:code' component={Book} />
    </Layout>
  </Router>

);

export default Routes;
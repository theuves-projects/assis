import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Layout from './components/Layout'

// Router register
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'

// Components
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Book from './pages/Book'

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
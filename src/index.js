import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import firebase, { auth, database } from 'firebase'
import firebaseConfig from '../firebaseConfig.json'

// Components at index
import Layout from './components/Layout'

// Others components
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import Book from './components/Book/Book'

// Routes
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'

// Global styles
import './styles/index.css'
import './styles/container.css'
import './styles/btn.css'
import './styles/keyframes.css'

// Para evitar inicializar o mesmo app duas vezes.
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

class App extends Component {
  render() {
    return (
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
    )
  }
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)

export default hot(App)
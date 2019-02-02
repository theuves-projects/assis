import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import firebase, { auth } from 'firebase'

// Components
import Layout from './components/Layout.js'
import Dashboard from './components/Dashboard/Dashboard'
import Book from './components/Book/Book'
import Home from './components/Home/Home'

// Global styles
import './styles/index.css'
import './styles/container.css'

/**
 * Se ainda não foi criado.
 * Para evitar erro com Hot Module Replacement.
 */
if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: 'AIzaSyB-F9JWpEgpfq2GIRlsFbDEJHIFObHS1QY',
    authDomain: 'theuves-assis.firebaseapp.com',
    databaseURL: 'https://theuves-assis.firebaseio.com',
    projectId: 'theuves-assis',
    storageBucket: '',
    messagingSenderId: '1033287127339'
  })
}

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Layout>
      </Router>
    )
  }
}

const root = document.getElementById('root')

ReactDOM.render(<App />, root)

export default hot(App)
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import firebase, { auth } from 'firebase'

// Components
import Layout from './components/Layout'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import Book from './components/Book/Book'

// Global styles
import './styles/index.css'
import './styles/container.css'

/**
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

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      (auth().currentUser) ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: {
              from: props.location
            }
          }}
        />
      )
    )}
  />
)

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
        </Layout>
      </Router>
    )
  }
}

const root = document.getElementById('root')

ReactDOM.render(<App />, root)

export default hot(App)
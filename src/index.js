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
import Loading from './components/Loading'

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

/**
 * O usuário será redirecionado para '/' se não tiver logado ainda.
 */
class PrivateRoute extends Component {
  constructor(props) {
    super(props)

    this.state = {}

    auth().onAuthStateChanged((user) => {
      this.setState({
        isLoggedIn: !!user
      })
    })
  }
  render() {
    const { component: Component, ...rest } = this.props

    return (
      <Route
        {...rest}
        exact
        render={(props) => {
          switch (this.state.isLoggedIn) {
            case true:
              return (
                <Component {...props} />
              )
            case false:
              return (
                <Redirect
                  to={{
                    pathname: '/',
                    state: {
                      from: props.location
                    }
                  }}
                />
              )
            default:
              return (
                <Loading />
              )
          }
        }}
      />
    )
  }
}

/**
 * O usuário será redirecionado para '/dashboard' se o usuário estiver logado.
 */
class PublicRoute extends Component {
  constructor(props) {
    super(props)

    this.state = {}

    auth().onAuthStateChanged((user) => {
      this.setState({
        isLoggedIn: !!user
      })
    })
  }
  render() {
    const { component: Component, ...rest } = this.props

    return (
      <Route
        {...rest}
        exact
        render={(props) => {
          switch (this.state.isLoggedIn) {
            case false:
              return (
                <Component {...props} />
              )
            case true:
              return (
                <Redirect
                  to={{
                    pathname: '/dashboard',
                    state: {
                      from: props.location
                    }
                  }}
                />
              )
            default:
              return (
                <Loading />
              )
          }
        }}
      />
    )
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <PublicRoute path='/' component={Home} />
          <PublicRoute path='/login' component={Login} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
        </Layout>
      </Router>
    )
  }
}

const root = document.getElementById('root')

ReactDOM.render(<App />, root)

export default hot(App)
import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { auth } from 'firebase'
import Loading from '../components/Loading'

// Rediciona para "/dashboard" se o usuário acessar uma página
// pública (como "/login") enquanto já estiver logado.
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
    const { component: Component_, ...rest } = this.props

    return (
      <Route
        {...rest}
        exact
        render={(props) => {
          if (
            this.state.isLoggedIn === undefined &&
            auth().currentUser === null
          ) {
            return <Loading />
          }
          if (
            !this.state.isLoggedIn ||
            !auth().currentUser
          ) {
            return <Component_ {...props} />
          }

          return (
            <Redirect
              to={{
                pathname: '/dashboard',
                state: { from: props.location }
              }}
            />
          )
        }}
      />
    )
  }
}

export default PublicRoute
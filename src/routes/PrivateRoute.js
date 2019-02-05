import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { auth, database } from 'firebase'
import Loading from '../components/Loading'

// Se o usuário não estiver logado e acessar uma
// página privada então ele será redirecionado para "/".
class PrivateRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    auth().onAuthStateChanged((user) => {
      if (!this.state) return
      const isLoggedIn = !!user
      this.setState({ isLoggedIn })

      if (isLoggedIn) {
        const uid = auth().currentUser.uid

        database().ref(`users/${uid}`).on('value', (snapshot) => {
          if (!this.state) return
          this.setState({

            // Usando o `Object.assign` pois o banco de dados (do Firebase)
            // não armazena valores vazio, desse modo, o componente dessa
            // rota ficaria com um sem `books.reading` e `books.read`, causando
            // erro ao chamar um método de Array (pois será `undefined`).
            data: Object.assign({
              books: {
                reading: [],
                read: []
              }
            }, snapshot.val())
          })
        })
      }
    })
  }
  render() {
    const { component: Component_, ...rest } = this.props

    return (
      <Route
        {...rest}
        exact
        render={(props) => {
          if (this.state.isLoggedIn === undefined &&
            auth().currentUser === null
          ) {
            return <Loading />
          }
          if (
            this.state.isLoggedIn ||
            !!auth().currentUser
          ) {
            if (!this.state.data) return <Loading />

            return <Component_ {...props} data={this.state.data} />
          }

          return (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location }
              }}
            />
          )
        }}
      />
    )
  }
}

export default PrivateRoute
import React, { Component } from 'react'
import { auth, database } from 'firebase'
import Form from './Form.js'
import './Apresentation.css'

class Apresentation extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(clearForm, {
    userName,
    userUsername,
    userEmail,
    userPassword
  }) {
    const { redirectTo } = this.props

    database().ref('users').once('value', (snapshot) => {
      const val = snapshot.val()
      const users = Object.values(val) || []
      const hasUser = !!users.find((user) => user.username === userUsername)

      if (hasUser) {
        window.alert('Esse nome de usuário já existe!')
      } else {
        if (!auth().currentUser) {
          auth()
            .createUserWithEmailAndPassword(userEmail, userPassword)
            .then((data) => {
              const uid = data.user.uid

              database().ref(`users/${uid}`).set({
                uid,
                name: userName,
                username: userUsername,
                email: userEmail,
                books: {
                  reading: [],
                  read: []
                }
              })

              redirectTo('/dashboard')
            })
            .catch((err) => {
              switch (err.code) {
                case 'auth/email-already-in-use':
                  window.alert('Esse e-mail já está em uso!')
                  break
                case 'auth/weak-password':
                  window.alert('Senha muito fraca!')
                  break
                default:
                  window.alert('Algo deu errado!')
              }
            })
        }
      }
    })


  }
  render() {
    return (
      <section className='apresentation'>
        <div className='container'>
          <Form
            onSubmit={this.onSubmit}
          />
        </div>
      </section>
    )
  }
}

export default Apresentation
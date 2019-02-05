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

    if (!auth().currentUser) {
      auth()
        .createUserWithEmailAndPassword(userEmail, userPassword)
        .then((data) => {
          const uid = data.user.uid

          database().ref(`users/${uid}`).set({
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
          window.alert('Algo deu errado!')
          console.error(err.message)
        })
    }
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
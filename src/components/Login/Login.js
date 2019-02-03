import React, { Component } from 'react'
import { auth } from 'firebase'
import './Login.css'

/**
 * TODO: Adicionar título apresentando a página de login.
 */

class Login extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)

    this.state = {
      userEmail: '',
      userPassword: ''
    }
  }
  onSubmit(event) {
    event.preventDefault()

    const { userEmail, userPassword } = this.state
    const redirectTo = this.props.history.push

    auth().setPersistence(auth.Auth.Persistence.LOCAL)
      .then(() => {
        auth()
          .signInWithEmailAndPassword(userEmail, userPassword)
          .then((data) => {
            redirectTo('/dashboard')
          })
          .catch((err) => {
            switch (err.code) {
              case 'auth/user-not-found':
                window.alert('Usuário não existe.')
                break
              case 'auth/wrong-password':
                window.alert('Senha inválida.')
                break
              default:
                window.alert('Algo deu errado!')
            }
          })
      })
      .catch(() => {
        alert('Algo deu errado!')
      })
  }
  onChange(event) { 
    const id = event.target.id
    const val = event.target.value

    this.setState({
      [id]: val
    })
  }
  render() {
    return (
      <section className='Login'>
        <div className='container'>
          <form
            className='Login-form'
            onSubmit={this.onSubmit}
          >
            <dl>
              <dt>
                <label htmlFor='#userEmail'>E-mail:</label>
              </dt>
              <dd>
                <input
                  id='userEmail'
                  value={this.state.userEmail}
                  onChange={this.onChange}
                  type='email'
                  placeholder='fulano@exemplo.com'
                />
              </dd>
              <dt>
                <label htmlFor='#userPassword'>Senha:</label>
              </dt>
              <dd>
                <input
                  id='userPassword'
                  value={this.state.userPassword}
                  onChange={this.onChange}
                  type='password'
                  placeholder='Senha secreta'
                />
              </dd>
            </dl>

            <button
              className='Login-btn'
              type='submit'
            >
              Entrar
            </button>
          </form>
        </div>
      </section>
    )
  }
}

export default Login
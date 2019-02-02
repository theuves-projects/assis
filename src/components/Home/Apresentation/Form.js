import React, { Component } from 'react'

// Styles
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)

    this.defaultState = {
      userName: '',
      userUsername: '',
      userEmail: '',
      userPassword: ''
    }

    this.state = {...this.defaultState}
  }

  onSubmit(event) {
    event.preventDefault()

    /**
     * Função para limpar o formulário no outro componente.
     */
    const clearForm = () => {
      this.setState(this.defaultState)
    }

    return this.props.onSubmit(clearForm, this.state)
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
      <form
        className='Form'
        onSubmit={this.onSubmit}
      >
        <dl>
          {/* Nome completo */}
          <dt>
            <label htmlFor='#userName'>
              Nome completo:
            </label>
          </dt>
          <dd>
            <input
              type='text'
              id='userName'
              placeholder='Fulano de Tal'
              value={this.state.userName}
              onChange={this.onChange}
              required
            />
          </dd>

          {/* Nome de usuário */}
          <dt>
            <label htmlFor='#userUsername'>
              Nome de usuário:
            </label>
          </dt>
          <dd>
            <input
              type='text'
              id='userUsername'
              placeholder='fulano'
              value={this.state.userUsername}
              onChange={this.onChange}
              required
            />
          </dd>

          {/* E-mail */}
          <dt>
            <label htmlFor='#userEmail'>
              E-mail:
            </label>
          </dt>
          <dd>
            <input
              type='email'
              id='userEmail'
              placeholder='fulano@exemplo.com'
              value={this.state.userEmail}
              onChange={this.onChange}
              required
            />
          </dd>

          {/* Senha */}
          <dt>
            <label htmlFor='#userPassword'>
              Senha:
            </label>
          </dt>
          <dd>
            <input
              type='password'
              id='userPassword'
              placeholder='Senha secreta'
              value={this.state.userPassword}
              onChange={this.onChange}
              required
            />
          </dd>
        </dl>
        <button
          type='submit'
          className='form-btn'
        >
          Registrar-se
        </button>
      </form>
    )
  }
}

export default Form
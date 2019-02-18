import React, { Fragment, Component } from 'React'
import { Link } from 'react-router-dom'
import { auth, database } from 'firebase'

// Utils
import getFirstName from '../utils/getFirstName'

// Components
import Avatar from './Avatar'

// Styles
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.refreshData = this.refreshData.bind(this)

    auth().onAuthStateChanged((user) => {
      this.refreshData()
    })
  }
  refreshData() {
    const isLoggedIn = !!auth().currentUser

    if (isLoggedIn) {
      const uid = auth().currentUser.uid
      
      database().ref(`users/${uid}`).once('value', (snapshot) => {
        const data = snapshot.val()

        this.setState({
          isLoggedIn,
          uid,
          ...data
        })
      })
    } else {
      this.setState({
        isLoggedIn
      })
    }
  }
  signOut() {
    if (window.confirm('Deseja realmente finalizar a sessão?')) {
      auth().signOut().catch(() => {
        window.alert('Algo deu errado!')
      })
    }
  }
  render() {
    return (
      <header className='Header'>
        <div className='container'>
          <div className='Header-flex'>
            <h1>
              <Link
                to={this.state.isLoggedIn ? '/dashboard' : '/'}
                className='Header-brand'
              >
                Assis
              </Link>
            </h1>
            <div className='Header-actions'>
              {(() => {
                switch (this.state.isLoggedIn) {

                  // Se estiver logado.
                  case true:
                    return (
                      <Fragment>
                        <Link
                          className='Header-userLink'
                          to='/dashboard'
                        >
                          <span className='Header-userLink-name'>
                            {getFirstName(this.state.name)}
                          </span>
                          <Avatar
                            uid={this.state.uid}
                            className='Header-userLink-avatar'
                            alt='Avatar'
                          />
                        </Link>
                        <button
                          className='Header-btn'
                          onClick={this.signOut}
                        >
                          Encerrar sessão
                          <i className='Header-btn-icon fas fa-sign-out-alt'></i>
                        </button>
                      </Fragment>
                    )

                  // Se não estiver logado.
                  case false:
                    return (
                      <Link
                        className='Header-btn'
                        to='/login'
                      >
                        Entrar na sua conta
                        <i className='Header-btn-icon fas fa-sign-in-alt'></i>
                      </Link>
                    )

                  // Se estiver carregando ainda.
                  default:
                    return 'Carregando...'
                }
              })()}
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
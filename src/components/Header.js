import React, { Fragment, Component } from 'React'
import { Link } from 'react-router-dom'
import { auth, database } from 'firebase'
import getAvatar from '../utils/getAvatar'
import getFirstName from '../utils/getFirstName'
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
              <Link to='/' className='Header-brand'>Assis</Link>
            </h1>
            <div className='Header-actions'>
              {this.state.isLoggedIn ? (
                <Fragment>
                  <div className='Header-user'>
                    <span className='Header-user-name'>{getFirstName(this.state.name)}</span>
                    <img
                      className='Header-user-avatar'
                      src={getAvatar(this.state.uid)}
                      alt='Avatar'
                    />
                  </div>
                  <button
                    className='Header-btn'
                    onClick={this.signOut}
                  >
                    Encerrar sessão
                    <i className='Header-btn-icon fas fa-sign-out-alt'></i>
                  </button>
                </Fragment>
              ) : (
                <Fragment>
                  <Link
                    className='Header-btn'
                    to='/login'
                  >
                    Entrar na sua conta
                    <i className='Header-btn-icon fas fa-sign-in-alt'></i>
                  </Link>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
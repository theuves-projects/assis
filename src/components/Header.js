import React, { Fragment } from 'React'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({
  isLoggedIn = false,
  user = {}
}) => (
  <header className='Header'>
    <div className='container'>
      <div className='Header-flex'>
        <h1>
          <a href='javascript:null' className='Header-brand'>Assis</a>
        </h1>
        <div className='Header-actions'>
          {isLoggedIn ? (
            <Fragment>
              <div className='Header-user'>
                <span className='Header-user-name'>{user.name}</span>
                <img
                  className='Header-user-avatar'
                  src={user.avatarUrl}
                  alt='Avatar'
                />
              </div>
              <a
                className='Header-btn'
                href='javascript:null'
              >
                Encerrar sessão
                <i className='Header-btn-icon fas fa-sign-out-alt'></i>
              </a>
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

export default Header
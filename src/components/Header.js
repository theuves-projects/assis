import React, { Fragment } from 'React'
import './Header.css'

const Header = ({
  isLoggedIn = false,
  onSignIn = () => {},
  onSignOut = () => {},
  user = {}
}) => (
  <header className="Header">
    <div className="container">
      <div className="Header-flex">
        <h1>
          <a href="javascript:null" className="Header-brand">Assis</a>
        </h1>
        <div className="Header-actions">
          {isLoggedIn ? (
            <Fragment>
              <div className="Header-user">
                <span className="Header-user-name">{user.name}</span>
                <img
                  className="Header-user-avatar"
                  src={user.avatarUrl}
                  alt="Avatar"
                />
              </div>
              <a
                className="Header-btn"
                href="javascript:null"
                onSignOut={() => onSignOut}
              >
                Encerrar sessão
                <i class="Header-btn-icon fas fa-sign-out-alt"></i>
              </a>
            </Fragment>
          ) : (
            <Fragment>
              <a
                className="Header-btn"
                href="javascript:null"
                onSignOut={() => onSignIn}
              >
                Entrar na sua conta
                <i class="Header-btn-icon fas fa-sign-in-alt"></i>
              </a>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  </header>
)

export default Header
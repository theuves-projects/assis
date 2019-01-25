import React, { Fragment } from 'React'
import '../styles/layouts/header.css'

const Header = ({
  isLoggedIn = false,
  onSignIn = () => {},
  onSignOut = () => {},
  user = {}
}) => (
  <header className="header">
    <div className="container">
      <div className="header-flex">
        <h1>
          <a href="javascript:null" className="header-brand">Assis</a>
        </h1>
        <div className="header-actions">
          {isLoggedIn ? (
            <Fragment>
              <div className="header-user">
                <span className="header-user-name">{user.name}</span>
                <img
                  className="header-user-avatar"
                  src={user.avatarUrl}
                  alt="Avatar"
                />
              </div>
              <a
                className="header-btn"
                href="javascript:null"
                onSignOut={() => onSignOut}
              >
                Encerrar sessão
                <i class="header-btn-icon fas fa-sign-out-alt"></i>
              </a>
            </Fragment>
          ) : (
            <Fragment>
              <a
                className="header-btn"
                href="javascript:null"
                onSignOut={() => onSignIn}
              >
                Entrar na sua conta
                <i class="header-btn-icon fas fa-sign-in-alt"></i>
              </a>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  </header>
)

export default Header
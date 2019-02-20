import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

// Utils
import createClassName from '../../utils/createClassName'

// Components
import BookList from './BookList/BookList'

// Styles
import './Content.css'

const READ = 'read'
const READING = 'reading'
const SELECT = 'select' 
const CONFIG = 'config' 

const Tab = ({
  url,
  hasNotOption,
  title,
  condition,
  linkTo,
  icon
}) => (
  <Link
    className={createClassName([
      'Dashboard_Content-tab',
      condition ? 'active' : null
    ])}
    to={hasNotOption ? `${url}/${linkTo}` : url.replace(/\w+$/, linkTo)}
  >
    <i className={`fas fa-${icon}`}></i>
    {` `}
    <span className='Dashboard_Content-tab-title'>
      {title}
    </span>
  </Link>  
)

const Content = ({
  isLoggedIn,
  option,
  url,
  children
}) => (
  <div className='Dashboard_Content'>
    <nav className='Dashboard_Content-tabs'>
      <Tab
        url={url}
        hasNotOption={!option}
        title='Lendo...'
        condition={!option || option === READING}
        linkTo={READING}
        icon='bookmark'
      />
      <Tab
        url={url}
        hasNotOption={!option}
        title='Lidos!'
        condition={option === READ}
        linkTo={READ}
        icon='book'
      />
      {isLoggedIn ? (
        <Fragment>
          <Tab
            url={url}
            hasNotOption={!option}
            title='Seleção'
            condition={option === SELECT}
            linkTo={SELECT}
            icon='plus-circle'
          />
          <Tab
            url={url}
            hasNotOption={!option}
            title='Configuração'
            condition={option === CONFIG}
            linkTo={CONFIG}
            icon='user-cog'
          />
        </Fragment>
      ) : null}
    </nav>

    {children}
  </div>
)

export default Content
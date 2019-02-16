import React from 'react'
import { Link } from 'react-router-dom'

// Utils
import createClassName from '../../utils/createClassName'

// Components
import BookList from './BookList/BookList'

// Styles
import './Content.css'

const READ = 'read'
const READING = 'reading'
const NEW = 'new' 

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
    { ` ` }
    { title }
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
        <Tab
          url={url}
          hasNotOption={!option}
          title='Novo'
          condition={option === NEW}
          linkTo={NEW}
          icon='plus-circle'
        />
      ) : null}
    </nav>

    {children}
  </div>
)

export default Content
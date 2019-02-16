import React from 'react'
import { Link } from 'react-router-dom'
import createClassName from '../../utils/createClassName'
import BookList from './BookList/BookList'
import './Content.css'

const Content = ({
  isLoggedIn,
  option,
  history,
  url,
  children
}) => (
  <div className='Dashboard_Content'>

    {/* Header */}
    <nav className='Dashboard_Content-tabs'>
      <Link
        className={createClassName([
          'Dashboard_Content-tab',
           !option || option === 'reading' ? 'active' : null
        ])}
        to={!option ? `${url}/reading` : url.replace(/\w+$/, 'reading')}
      >
        <i className='fas fa-bookmark'></i>
        {` `}
        Lendo....
      </Link>
      <Link
        className={createClassName([
          'Dashboard_Content-tab',
          option === 'read' ? 'active' : null
        ])}
        to={!option ? `${url}/read` : url.replace(/\w+$/, 'read')}
      >
        <i className='fas fa-book'></i>
        {` `}
        Lidos!
      </Link>
      {isLoggedIn ? (
        <Link
          className={createClassName([
            'Dashboard_Content-tab',
            option === 'new' ? ' active' : null
          ])}
          to={!option ? `${url}/new` : url.replace(/\w+$/, 'new')}
        >
          <i className='fas fa-plus-circle'></i>
          {` `}
          Novo
        </Link>
      ) : null}
    </nav>

    {children}
  </div>
)

export default Content
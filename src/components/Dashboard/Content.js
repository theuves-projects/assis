import React from 'react'
import { Link } from 'react-router-dom'
import createClassName from '../../utils/createClassName'
import BookList from './BookList/BookList'
import './Content.css'

const Content = ({
  isLoggedIn,
  option,
  history,
  children
}) => (
  <div className='Dashboard_Content'>

    {/* Header */}
    <header className='Dashboard_Content-header'>
      <div>
        <Link
          className={createClassName([
            'Dashboard_Content-btn',
             !option || option === 'reading' ? 'active' : null
          ])}
          to='reading'
        >
          <i className='fas fa-bookmark'></i>
          {` `}
          Lendo....
        </Link>
        <Link
          className={createClassName([
            'Dashboard_Content-btn',
            option === 'read' ? 'active' : null
          ])}
          to='read'
        >
          <i className='fas fa-book'></i>
          {` `}
          Lidos!
        </Link>
      </div>
      {isLoggedIn ? (
        <div>
          <Link
            className={createClassName([
              'Dashboard_Content-btn-new',
              option === 'new' ? ' active' : null
            ])}
            to='new'
          >
            <i className='fas fa-plus-circle'></i>
            {` `}
            Novo
          </Link>
        </div>
      ) : null}
    </header>

    {children}
  </div>
)

export default Content
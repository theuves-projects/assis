import React from 'react'
import { Link } from 'react-router-dom'
import BookList from './BookList/BookList'
import './Content.css'

const Content = ({ children, option, history }) => (
  <div className='Dashboard_Content'>

    {/* Header */}
    <header className='Dashboard_Content-header'>
      <div>
        <Link
          className={'Dashboard_Content-btn' + ((!option || option === 'reading') ? ' active' : '')}
          to='/dashboard/reading'
        >
          <i className='fas fa-bookmark'></i>
          {` `}
          Lendo....
        </Link>
        <Link
          className={'Dashboard_Content-btn' + (option === 'read' ? ' active' : '')}
          to='/dashboard/read'
        >
          <i className='fas fa-book'></i>
          {` `}
          Lidos!
        </Link>
      </div>
      <div>
        <Link
          className={'Dashboard_Content-btn-new' + (option === 'new' ? ' active' : '')}
          to='/dashboard/new'
        >
          <i className='fas fa-plus-circle'></i>
          {` `}
          Novo
        </Link>
      </div>
    </header>

    {children}
  </div>
)

export default Content
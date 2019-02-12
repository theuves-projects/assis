import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import './BookListItem.css'

const BookListItem = ({
  code,
  isLoggedIn,
  title,
  coverUrl
}) => (
  <li>
    <div className='Dashboard_BookList_BookListItem'>
      <div className='Dashboard_BookList_BookListItem-body'>
        {isLoggedIn ? (
          <Link
            className='Dashboard_BookList_BookListItem-link'
            to={`/book/${code}`}
          >
            <img
              className='Dashboard_BookList_BookListItem-cover'
              src={coverUrl}
              alt={`Capa do livro ${title}`}
            />
          </Link>
        ) : (
          <img
            className='Dashboard_BookList_BookListItem-cover'
            src={coverUrl}
            alt={`Capa do livro ${title}`}
          />
        )}
      </div>
      <div className='Dashboard_BookList_BookListItem-footer'>
        <cite className='Dashboard_BookList_BookListItem-title'>
          {title}
        </cite>
        <Dropdown
          bookCode={code}
          icon='cogs'
        >
          <label className='Dashboard_BookList_BookListItem-checkbox'>
            <input type="checkbox"/>
            {` `}
            Lido
          </label>
          <label className='Dashboard_BookList_BookListItem-checkbox'>
            <input type="checkbox"/>
            {` `}
            Lendo
          </label>
        </Dropdown>
      </div>
    </div>
  </li>
)

export default BookListItem
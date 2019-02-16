import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import Checkbox from '../../Checkbox'
import './BookListItem.css'

const BookListItem = ({
  code,
  uid,
  authUid,
  status,
  isLoggedIn,
  isRead,
  isReading,
  title,
  coverUrl,
  onChangeConfig
}) => (
  <li>
    <div className='Dashboard_BookList_BookListItem'>
      <div className='Dashboard_BookList_BookListItem-body'>
        {isLoggedIn && authUid === uid ? (
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
        {isLoggedIn  ? (
          <Dropdown
            bookCode={code}
            icon='cogs'
          >
            <label className='Dashboard_BookList_BookListItem-checkbox'>
              <Checkbox
                isChecked={isRead}
                onChange={(isChecked) => onChangeConfig(code, 'read', isChecked)}
              />
              {` `}
              Lido
            </label>
            <label className='Dashboard_BookList_BookListItem-checkbox'>
              <Checkbox
                isChecked={isReading}
                onChange={(isChecked) => onChangeConfig(code, 'reading', isChecked)}
              />
              {` `}
              Lendo
            </label>
          </Dropdown>
        ) : null}
      </div>
    </div>
  </li>
)

export default BookListItem
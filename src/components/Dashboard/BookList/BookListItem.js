import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import Checkbox from '../../Checkbox'
import './BookListItem.css'

const DropdownItem = ({
  title,
  checkboxValue,
  bookCode,
  status
}) => (
  <label className='Dashboard_BookList_BookListItem-checkbox'>
    <Checkbox
      isChecked={checkboxValue}
      onChange={(isChecked) => onChangeConfig(
        bookCode,
        status,
        isChecked
      )
    }
    />
    {` `}
    { title }
  </label>
)

const BookCover = ({
  src,
  title
}) => (
  // 1.65 * w / 1 é a fórmula para calcular a largura.
  <img
    ref={(el) => { if (el) el.style.height = 1.65 * el.offsetWidth / 1  }}
    className='Dashboard_BookList_BookListItem-cover'
    src={src}
    alt={`Capa do livro ${title}`}
  />
)

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
            <BookCover
              src={coverUrl}
              title={title}
            />
          </Link>
        ) : (
          <BookCover
            src={coverUrl}
            title={title}
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
            <DropdownItem
              title='Lido?'
              checkboxValue={isRead}
              bookCode={code}
              status='read'
            />
            <DropdownItem
              title='Lido?'
              checkboxValue={isReading}
              bookCode={code}
              status='reading'
            />
          </Dropdown>
        ) : null}
      </div>
    </div>
  </li>
)

export default BookListItem
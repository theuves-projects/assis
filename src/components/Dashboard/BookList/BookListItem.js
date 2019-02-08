import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './BookListItem.css'

const Book = ({ title, coverUrl }) => (
  <Fragment>
    <img
      className='Dashboard_BookList_BookListItem-cover'
      src={coverUrl}
      alt={`Capa do livro ${title}`}
    />
    <cite className='Dashboard_BookList_BookListItem-title'>
      {title}
    </cite>
  </Fragment>
)

const BookListItem = ({
  code,
  isLoggedIn,
  title,
  coverUrl
}) => (
  <li>
    {isLoggedIn ? (
      <Link
        className='Dashboard_BookList_BookListItem'
        to={`/book/${code}`}
      >
        <Book
          title={title}
          coverUrl={coverUrl}
        />
      </Link>
    ) : (
      <div className='Dashboard_BookList_BookListItem'>
        <Book
          title={title}
          coverUrl={coverUrl}
        />
      </div>
    )}
  </li>
)

export default BookListItem
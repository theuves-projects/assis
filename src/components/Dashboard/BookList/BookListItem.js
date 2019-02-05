import React from 'react'
import { Link } from 'react-router-dom'
import './BookListItem.css'

const BookListItem = ({ code, title, coverUrl }) => (
  <li>
    <Link
      className='Dashboard_BookList_BookListItem'
      to={`/book/${code}`}
    >
      <img
        className='Dashboard_BookList_BookListItem-cover'
        src={coverUrl}
        alt={`Capa do livro ${title}`}
      />
      <cite className='Dashboard_BookList_BookListItem-title'>{title}</cite>
    </Link>
  </li>
)

export default BookListItem
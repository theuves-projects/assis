import React from 'react'
import './BookListItem.css'

const BookListItem = ({ title, coverUrl }) => (
  <li className='Dashboard_BookList_BookListItem'>
    <img
      className='Dashboard_BookList_BookListItem-cover'
      src={coverUrl}
      alt={`Capa do livro ${title}`}
    />
    <cite className='Dashboard_BookList_BookListItem-title'>{title}</cite>
  </li>
)

export default BookListItem
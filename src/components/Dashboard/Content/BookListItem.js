import React from 'react'

// Styles
import './BookListItem.css'

const BookListItem = ({ title, coverUrl }) => (
  <li className='Dashboard_Content_BookListItem'>
    <img
      className='Dashboard_Content_BookListItem-cover'
      src={coverUrl}
      alt={`Capa do livro ${title}`}
    />
    <cite className='Dashboard_Content_BookListItem-title'>{title}</cite>
  </li>
)

export default BookListItem
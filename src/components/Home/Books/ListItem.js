import React from 'react'

// Styles
import './ListItem.css'

const ListItem = ({
  onClick,
  coverUrl,
  bookTitle
}) => (
  <li
    className='Home_Books_ListItem'
    onClick={onClick}
  >
    <img
      className='Home_Books_ListItem-cover'
      src={coverUrl}
      alt={bookTitle}
    />
    <h2 className='Home_Books_ListItem-title'>
      {bookTitle}
    </h2>
  </li>
)

export default ListItem
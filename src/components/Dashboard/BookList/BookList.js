import React from 'react'
import { findBook } from '../../../utils/books'
import BookListItem from './BookListItem'
import './BookList.css'

const BookList = ({ isLoggedIn, booksCode }) => {
  if (!booksCode || booksCode.length === 0) {
    return <p>Você não escolheu nenhum livro ainda.</p>
  }

  return (
    <ul className='Dashboard_BookList'>
      {booksCode.map((code) => {
        const bookInfo = findBook(code)

        return (
          <BookListItem
            key={code}
            code={code}
            isLoggedIn={isLoggedIn}
            title={bookInfo.title}
            coverUrl={bookInfo.coverUrl}
          />
        )
      })}
    </ul>
  )
}
export default BookList
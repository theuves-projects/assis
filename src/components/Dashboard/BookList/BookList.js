import React from 'react'
import { findBook } from '../../../books'
import BookListItem from './BookListItem'
import './BookList.css'

const BookList = ({ booksCode }) => {
  if (!booksCode || booksCode.length === 0) {
    return <p>Você não escolheu nenhum livro ainda.</p>
  }

  return (
    <ul className='Dashboard_BookList'>
      {booksCode.map((code, index) => {
        const bookInfo = findBook(code)

        return (
          <BookListItem
            key={index}
            title={bookInfo.title}
            coverUrl={bookInfo.coverUrl}
          />
        )
      })}
    </ul>
  )
}
export default BookList
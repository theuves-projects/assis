import React from 'react'
import { findBook } from '../../../books'
import BookListItem from './BookListItem'
import './BookList.css'

const BookList = ({ booksCode }) => {
  if (!booksCode || booksCode.length === 0) {
    return <p>Você não escolheu nenhum livro ainda.</p>
  }

  return (
    <ul className='Dashboard_Content_BookList'>
      {booksCode.map((code) => {
        const bookInfo = findBook(code)
        return (
          <BookListItem
            title={bookInfo.title}
            coverUrl={bookInfo.coverUrl}
          />
        )
      })}
    </ul>
  )
}
export default BookList
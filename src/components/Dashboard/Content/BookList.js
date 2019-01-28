import React from 'react'

// Utils
import { findBook } from '../../../books'

// Styles
import './BookList.css'

// Components
import BookListItem from './BookListItem'

const BookList = ({ booksCode }) => {
  if (!booksCode || booksCode.length === 0) {
    return <p>Você não escolheu nenhum livro ainda.</p>
  }

  return (
    <ul class='Dashboard_Content_BookList'>
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
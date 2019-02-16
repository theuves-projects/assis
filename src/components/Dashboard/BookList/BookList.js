import React from 'react'
import { findBook } from '../../../utils/books'
import BookListItem from './BookListItem'
import './BookList.css'

const BookList = ({
  status,
  isLoggedIn,
  onChangeConfig,
  booksInformation
}) => {
  const booksCode = booksInformation[status]

  if (!booksCode || booksCode.length === 0) {
    return 'Nenhum livro selecionado ainda.'
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
            isRead={(booksInformation.read || []).includes(code)}
            isReading={(booksInformation.reading || []).includes(code)}
            onChangeConfig={onChangeConfig}
          />
        )
      })}
    </ul>
  )
}
export default BookList
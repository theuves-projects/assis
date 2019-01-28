import React from 'react'

// Styles
import './NewBooks.css'

// Utils
import books from '../../../books'

// Componente a ser exibido quando o usuário
// clicar para adicionar mais livros as lista de
// livros "Lendo..." ou "Lidos!".

const NewBooks = () => (
  <div>
    {books.map((book, index) => (
      <div
        className='Dashboard_Content_NewBooks-items'
        key={index}
      >
        <div className='Dashboard_Content_NewBooks-name'>
          <cite>{book.title}</cite> (<time>{book.year}</time>)
        </div>
        <div className='Dashboard_Content_NewBooks-checkbox'>
          <label>
            <input type='checkbox' />
            {` `}
            Lendo?
          </label>
        </div>
        <div className='Dashboard_Content_NewBooks-checkbox'>
          <label>
            <input type='checkbox' />
            {` `}
            Lido?
          </label>
        </div>
      </div>
    ))}
  </div>
)

export default NewBooks
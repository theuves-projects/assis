import React from 'react'

// Styles
import './Text.css'

const Text = ({ book }) => (
  <article className='Book_Text'>
    <header className='Book_Text-header'>
      <h1 className='Book_Text-title'>
        {book.chapterName}
      </h1>
      {book.chapterDescription ? (
        <h2 className='Book_Text-subtitle'>
          {book.chapterDescription}
        </h2>
      ) : (
        null
      )}
    </header>

    {book.text.map((paragraph, index) => {

      // Centralizar partes específicas.
      if (/^(M\.?(\sde\s)?A\.?|FIM)$/i.test(paragraph)) {
        return (
          <p key={index} className='Book_Text-p Book_Text-pCenter'>
            {paragraph}
          </p>
        )
      }

      return (
        <p key={index} className='Book_Text-p'>
          {paragraph}
        </p>
      )
    })}
  </article>
)

export default Text
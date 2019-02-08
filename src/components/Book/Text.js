import React from 'react'
import createClassName from '../../utils/createClassName'
import './Text.css'

const Text = ({
  book,
  onReqNextChapter,
  fontSize,
  fontFamily
}) => (
  <article
    className={createClassName([
      'Book_Text',
      `Book_Text-fontSize-${fontSize}`,
      `Book_Text-fontFamily-${fontFamily}`
    ])}
  >
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

    <div className='Book_Text-content'>
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
    </div>

    <div className='Book_Text-pCenter'>
      <button
        className='Book_Text-btn'
        onClick={onReqNextChapter}
      >
        <i className='fas fa-hand-point-right'></i>
      </button>
    </div>
  </article>
)

export default Text
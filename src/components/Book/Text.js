import React from 'react'

// Utils
import createClassName from '../../utils/createClassName'

// Components
import TextWithDictionary from '../TextWithDictionary'

// Styles
import './Text.css'

const Text = ({
  book,
  fontSize,
  fontFamily,
  chapterChanger
}) => (
  <article
    className={createClassName([
      'Book_Text',
      `Book_Text--font-size--${fontSize}`,
      `Book_Text--font-family--${fontFamily}`
    ])}
  >
    <TextWithDictionary className='Book_Text-content'>
      {book.map((paragraph, index) => {

        // Alinhamento no centro
        if (paragraph.align === 'center') {

          // Se for um título estará dentro dum h1
          if (paragraph.isTitle) {
            return (
              <h1 key={index} className='Book_Text-title'>
                {paragraph.content}
              </h1>
            )
          }

          // Caso contrário, será um parágrafo normal centralizado
          return (
            <p key={index} className='Book_Text-p Book_Text-pCenter'>
              {paragraph.content}
            </p>
          )
        }

        // Parágrafo normal
        return (
          <p key={index} className='Book_Text-p'>
            {paragraph.content}
          </p>
        )
      })}
    </TextWithDictionary>

    <div className='Book_Text-pCenter'>
      <button
        className='Book_Text-btn'
        onClick={() => chapterChanger(-1)}
      >
        <i className='fas fa-hand-point-left'></i>
      </button>
      <button
        className='Book_Text-btn'
        onClick={() => chapterChanger(1)}
      >
        <i className='fas fa-hand-point-right'></i>
      </button>
    </div>
  </article>
)

export default Text
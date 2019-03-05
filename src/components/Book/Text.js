import React from 'react'

// Utils
import createClassName from '../../utils/createClassName'

// Components
import TextWithDictionary from '../TextWithDictionary'

// Styles
import './Text.css'

//
// Converte "-" para "―"
//
function normalizeDash(str) {
  return str
    .replace(/\s-\s/g, ' ― ')
    .replace(/-\s/g, '― ')
}

//
// Title
//
const Title = ({ content }) => (
  <h1 className='Book_Text-title'>
    {content}
  </h1>
)

//
// Paragraph
//
const Paragraph = ({ content, isCentralized }) => (
  <p className={createClassName([
      'Book_Text-paragraph',
      isCentralized ? `Book_Text-paragraph--center` : null
    ])}
  >
    {normalizeDash(content)}
  </p>
)

//
// Button
//
const Button = ({ direction, ...props }) => (
  <button
    className='Book_Text-btn'
    {...props}
  >
    <i className={createClassName([
        'fas',
        `fa-hand-point-${direction}`
      ])}
    />
  </button>
)

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
      {book.map((para, index) => {
        if (para.isTitle) {
          return <Title key={index} content={para.content} />
        }
        if (para.isCentralized) {
          return <Paragraph key={index} content={para.content} isCentralized={true} />
        }
        return <Paragraph key={index} content={para.content} />
      })}
    </TextWithDictionary>

    <footer className='Book_Text-footer'>
      <Button
        direction='left'
        title='Voltar capítulo'
        onClick={() => chapterChanger(-1)}
      />
      <Button
        direction='right'
        title='Próximo capítulo'
        onClick={() => chapterChanger(1)}
      />
    </footer>
  </article>
)

export default Text
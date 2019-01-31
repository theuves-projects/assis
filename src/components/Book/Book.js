import React, { Component } from 'react'

// Styles
import './Book.css'

// Components
import Text from './Text'

// !!! Só para teste !!!
import book from '../../content/texts/dom-casmurro.json'
// !!! Só para teste !!!

class Book extends Component {
  constructor(props) {
    super(props)
    
    this.changeChapter = this.changeChapter.bind(this)
    this.changeFontSize = this.changeFontSize.bind(this)
    this.changeFontFamily = this.changeFontFamily.bind(this)

    this.state = {
      currentChapter: 0,
      fontSize: 'normal',
      fontFamily: 'serif'
    }
  }
  changeChapter(event) {
    this.setState({
      currentChapter: parseInt(event.target.value)
    })
  }
  changeFontSize(event) {
    this.setState({
      fontSize: event.target.value
    })
  }
  changeFontFamily(event) {
    this.setState({
      fontFamily: event.target.value
    })
  }
  nextChapter() {
    this.setState({
      currentChapter: this.state.currentChapter + 1
    })
  }
  render() {
    return (
      <section className='Book'>
        <div className='container'>
          <div className='Book-actions'>

            {/* Na esquerda. */}
            <div>

              {/* Seleção do capítulo. */}
              <select
                className='Book-select Book-selectSpecial'
                value={this.state.currentChapter}
                onChange={this.changeChapter}
              >
                {book.map((chapter, index) => (
                  <option
                    className='Book-select-option'
                    key={index}
                    value={index}
                  >
                    {chapter.chapterName}
                  </option>
                ))}
              </select>
            </div>

            {/* Na direita. */}
            <div>

              {/* Seleção do tamanho da fonte. */}
              <select
                className='Book-select'
                value={this.state.fontSize}
                onChange={this.changeFontSize}
              >
                <option value='small'>Fonte pequena</option>
                <option value='normal'>Fonte normal</option>
                <option value='big'>Fonte grande</option>
              </select>

              {/* Seleção da família da fonte. */}
              <select
                className='Book-select'
                value={this.state.fontFamily}
                onChange={this.changeFontFamily}
              >
                <option value='serif'>Fonte serifada</option>
                <option value='sans-serif'>Fonte sem serifa</option>
                <option value='monospace'>Fonte mono-espaçada</option>
              </select>
            </div>
          </div>
          <Text
            book={book[this.state.currentChapter]}
            fontSize={this.state.fontSize}
            fontFamily={this.state.fontFamily}
          />
        </div>
      </section>
    )
  }
}

export default Book
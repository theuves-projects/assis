import React, { Component } from 'react'
import Text from './Text'
import axios from 'axios'
import { findBook } from '../../utils/books'
import Loading from '../Loading'
import './Book.css'

class Book extends Component {
  constructor(props) {
    super(props)
    
    this.changeChapter = this.changeChapter.bind(this)
    this.changeFontSize = this.changeFontSize.bind(this)
    this.changeFontFamily = this.changeFontFamily.bind(this)
    this.nextChapter = this.nextChapter.bind(this)

    this.state = {
      currentChapter: 0,
      fontSize: 'normal',
      fontFamily: 'serif'
    }

    const dataPath = findBook(parseInt(this.props.match.params.code)).dataPath
  
    axios.get(dataPath)
      .then((response) => {
        this.setState({
          data: response.data
        })
      })
      .catch((err) => {
        alert('Houve algum erro! Não foi possível obter o livro.')
      })
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
    if (!this.state.data) return (
      <Loading>
        Carregando o livro...
      </Loading>
    )

    return (
      <section className='Book'>
        <div className='container'>
          <div className='Book-actions'>

            {/* Na esquerda. */}
            <div>

              {/* Seleção do capítulo. */}
              <fieldset className='Book-fieldset'>
                <legend className='Book-legend'>Capítulo:</legend>
                <select
                  className='Book-select Book-selectSpecial'
                  value={this.state.currentChapter}
                  onChange={this.changeChapter}
                >
                  {this.state.data.map((chapter, index) => (
                    <option
                      className='Book-select-option'
                      key={index}
                      value={index}
                    >
                      {chapter.chapterName}
                    </option>
                  ))}
                </select>
              </fieldset>
            </div>

            {/* Na direita. */}
            <div>

              {/* Seleção do tamanho da fonte. */}
              <fieldset className='Book-fieldset'>
                <legend className='Book-legend'>Tamanho:</legend>
                <select
                  className='Book-select'
                  value={this.state.fontSize}
                  onChange={this.changeFontSize}
                >
                  <option value='small'>Fonte pequena</option>
                  <option value='normal'>Fonte normal</option>
                  <option value='big'>Fonte grande</option>
                </select>
              </fieldset>

              {/* Seleção da família da fonte. */}
              <fieldset className='Book-fieldset'>
                <legend className='Book-legend'>Família:</legend>
                <select
                  className='Book-select'
                  value={this.state.fontFamily}
                  onChange={this.changeFontFamily}
                >
                  <option value='serif'>Fonte serifada</option>
                  <option value='sans-serif'>Fonte sem serifa</option>
                  <option value='monospace'>Fonte mono-espaçada</option>
                </select>
              </fieldset>
            </div>
          </div>
          <Text
            book={this.state.data[this.state.currentChapter]}
            fontSize={this.state.fontSize}
            fontFamily={this.state.fontFamily}
            onReqNextChapter={this.nextChapter}
          />
        </div>
      </section>
    )
  }
}

export default Book
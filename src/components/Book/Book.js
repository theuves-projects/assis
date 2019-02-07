import React, { Component } from 'react'
import Text from './Text'
import axios from 'axios'
import { auth, database } from 'firebase'
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

    const bookCode = this.props.match.params.code

    if (this.props.data.booksConfig && this.props.data.booksConfig[bookCode]) {
      this.state = {
        config: this.props.data.booksConfig[bookCode]
      }
    } else {
      this.state = {
        config: {
          currentChapter: 0,
          fontSize: 'normal',
          fontFamily: 'serif'
        }
      }
    }

    const dataPath = findBook(parseInt(bookCode)).dataPath
  
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
  componentWillUpdate(nextProps, nextState) {
    if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
      const uid = auth().currentUser.uid
      const bookCode = this.props.match.params.code
      database().ref(`users/${uid}/booksConfig/${bookCode}`).set(nextState.config)
    }
  }
  changeChapter(event) {
    this.setState({
      config: {
        ...this.state.config,
        currentChapter: parseInt(event.target.value)
      }
    })
  }
  changeFontSize(event) {
    this.setState({
      config: {
        ...this.state.config,
        fontSize: event.target.value
      }
    })
  }
  changeFontFamily(event) {
    this.setState({
      config: {
        ...this.state.config,
        fontFamily: event.target.value
      }
    })
  }
  nextChapter() {
    this.setState({
      config: {
        ...this.state.config,
        currentChapter: this.state.config.currentChapter + 1,
      }
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
                  value={this.state.config.currentChapter}
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
                  value={this.state.config.fontSize}
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
                  value={this.state.config.fontFamily}
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
            book={this.state.data[this.state.config.currentChapter]}
            fontSize={this.state.config.fontSize}
            fontFamily={this.state.config.fontFamily}
            onReqNextChapter={this.nextChapter}
          />
        </div>
      </section>
    )
  }
}

export default Book
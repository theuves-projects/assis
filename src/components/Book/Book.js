import React, { Component } from 'react'

// Utils
import { auth, database } from 'firebase'
import axios from 'axios'
import { findBook } from '../../utils/books'
import createClassName from '../../utils/createClassName'

// Components
import Text from './Text'
import Loading from '../Loading'

// Styles
import './Book.css'

//
// Select na parte superior da página
//
const Select = ({
  legend,
  value,
  onChange,
  isSpecial,
  children
}) => (
  <fieldset className='Book-fieldset'>
    <legend className='Book-legend'>{legend}:</legend>
    <select
      className={createClassName([
        'Book-select',
        isSpecial ? 'Book-select--special' : null
      ])}
      value={value}
      onChange={onChange}
    >
      {children}
    </select>
  </fieldset>
)

//
// Item de opção pro componente Select
//
const Option = ({
  value,
  name
}) => (
  <option
    className='Book-select-option'
    value={value}
  >
    {name}
  </option>  
)


class Book extends Component {

  //
  // Init
  //
  constructor(props) {
    super(props)

    // Bind
    this.onChangeChapter = this.onChangeChapter.bind(this)
    this.chapterChanger = this.chapterChanger.bind(this)
    this.changeFont = this.changeFont.bind(this)

    const bookCode = this.props.match.params.code
    const hasConfigs = this.props.data.booksConfig
    const hasConfigsToThis = this.props.data.booksConfig[bookCode]

    // Definição das configurações
    if (hasConfigs && hasConfigsToThis) {
      this.state = {
        config: this.props.data.booksConfig[bookCode]
      }
    } else {
      this.state = {
        config: {
          currentChapter : 0,
          fontSize       : 'normal',
          fontFamily     : 'serif'
        }
      }
    }

    // URL do JSON do livro
    const dataPath = findBook(parseInt(bookCode)).dataPath
  
    axios.get(dataPath)
      .then(onReqSuccess.bind(this))
      .catch(onReqError)

    function onReqSuccess(res) {
      if (!this.state) return

      this.setState({
        data: res.data
      })
    }
    function onReqError(err) {
      alert('Houve algum erro! Não foi possível obter o livro.')
      console.error(err)
    }
  }

  //
  // Antes de atualizar:
  //
  // * Volta para o topo da página
  // * Atualiza configurações no banco de dados
  //
  componentWillUpdate(_, nextState) {
    const stateStr = JSON.stringify(this.state)
    const nextStateStr = JSON.stringify(nextState)

    if (stateStr !== nextStateStr) {
      const currChapter = this.state.config.currentChapter
      const nextChapter = nextState.config.currentChapter

      if (currChapter !== nextChapter) {
        window.scrollTo(0, 0)
      }

      const uid = auth().currentUser.uid
      const bookCode = this.props.match.params.code

      // Atualiza banco de dados
      database()
        .ref(`users/${uid}/booksConfig/${bookCode}`)
        .set(nextState.config)
    }
  }

  ///
  // Alterar capítulo
  //
  onChangeChapter(event) {
    if (!this.state) return

    this.setState({
      config: {
        ...this.state.config,
        currentChapter: parseInt(event.target.value)
      }
    })
  }

  //
  // Altera a fonte
  //
  // * status
  //   -> fontSize - Pro tamanho da fonte
  //   -> fontFamily - Pra família da fonte
  //
  changeFont(state, value) {
    if (!this.state) return

    if (state !== 'fontSize') return
    if (state !== 'fontFamily') return

    this.setState({
      config: {
        ...this.state.config,
        [state]: value
      }
    })
  }

  //
  // Avançar capítulo
  //
  chapterChanger(n) {
    this.setState({
      config: {
        ...this.state.config,
        currentChapter: this.state.config.currentChapter + n,
      }
    })
  }

  //
  // Render
  //
  render() {

    // Carregando
    if (!this.state.data) {
      return <Loading msg='Carregando o livro...' />
    }

    // Variáveis
    const { currentChapter, fontSize, fontFamily } = this.state.config
    const chapterContent = this.state.data.data[currentChapter]

    // Depois de carregado
    return (
      <section className='Book'>
        <div className='container'>

          {/* Refrente às opções na parte superior */}
          <div className='Book-actions'>

            {/* Na esquerda */}
            <div>
              <Select
                legend='Capítulo'
                value={currentChapter}
                onChange={this.onChangeChapter}
                isSpecial={true}
              >
                {this.state.data.chapter.map((chapter) => (
                  <Option
                    key={chapter.index}
                    value={chapter.index}
                    name={chapter.name}
                  />
                ))}
              </Select>
            </div>

            {/* Na direita */}
            <div>

              {/* Tamanho da fonte */}
              <Select
                legend='Tamanho'
                value={fontSize}
                onChange={(e) => this.changeFont('fontSize', e.target.value)}
              >
                <Option value='small' name='Fonte pequena' />
                <Option value='normal' name='Fonte normal' />
                <Option value='big' name='Fonte grande' />
              </Select>

              {/* Família da fonte */}
              <Select
                legend='Família'
                value={fontFamily}
                onChange={(e) => this.changeFont('fontFamily', e.target.value)}
              >
                <Option value='serif' name='Fonte serifada' />
                <Option value='sans-serif' name='Fonte sem serifa' />
                <Option value='monospace' name='Fonte mono-espaçada' />
              </Select>
            </div>
          </div>

          {/* Conteúdo do livro */}
          <Text
            book={chapterContent}
            fontSize={fontSize}
            fontFamily={fontFamily}
            chapterChanger={this.chapterChanger}
          />
        </div>
      </section>
    )
  }
}

export default Book
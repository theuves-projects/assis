import React, { Component, Fragment } from 'react'
import axios from 'axios'
import canBePtWord from '../utils/canBePtWord'
import cml from '../utils/cml'
import './TextWithDictionary.css'

const covertUnderlineToItalic = (text) => {
  return cml(text, [
    {
      tokenStart: '_',
      replacerStart: '<i>',
      tokenEnd: '_',
      replacerEnd: '<i>'
    }
  ])
}

class TextWithDictionary extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onScroll = this.onScroll.bind(this)
    this.onSelectText = this.onSelectText.bind(this)
    this.onClickInThePage = this.onClickInThePage.bind(this)
    this.setDictionaryContentRef = this.setDictionaryContentRef.bind(this)
    this.setDictionaryContainerRef = this.setDictionaryContainerRef.bind(this)
  }
  componentDidMount() {
    window.addEventListener('click', this.onClickInThePage)
    window.addEventListener('scroll', this.onScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.onClickInThePage)
    window.removeEventListener('scroll', this.onScroll)
  }
  setDictionaryContentRef(element) {
    this.dictionaryContent = element
  }
  setDictionaryContainerRef(element) {
    this.dictionaryContainer = element
  }
  onScroll() {
    if (this.dictionaryContent) {
      this.dictionaryContent.style.display = 'none'
      this.setState({
        content: ''
      })
    }
  }
  onClickInThePage({ target }) {
    if (!this.dictionaryContainer) return
    if (!this.dictionaryContent) return
    if (!this.dictionaryContainer.contains(target)) {
      this.dictionaryContent.style.display = 'none'
      this.setState({
        content: ''
      })
    }
  }
  onSelectText() {
    if (!this.state) return
    if (!this.dictionaryContent) return

    const selection = window.getSelection()

    if (selection.isCollapsed) {
      this.dictionaryContent.style.display = 'none'
      this.setState({
        content: ''
      })
    }

    const range = selection.getRangeAt(0)
    const text = range.toString().trim()

    if (canBePtWord(text)) {
      axios.get(`http://dicionario-aberto.net/search-json/${text}`)
        .then((res) => {
          const data = res.data.entry.sense.map((meaning) => {
            return `${covertUnderlineToItalic(meaning.def)}<br/>`
          })
           this.setState({
             content: data.join('<br/>')
           })
        })
        .catch((err) => {
          this.setState({
            content: 'Não foi possível pesquisar isso.'
          })
        })

      const { x, y, width, height } = range.getBoundingClientRect()

      this.dictionaryContent.style.display = 'block'
      this.dictionaryContent.style.left = x + width / 2
      this.dictionaryContent.style.top = y + height + 15
    }
  }
  render() {
    const { children, ...props } = this.props

    return (
      <div ref={this.setDictionaryContainerRef}>
        <div
          className='TextWithDictionary-content'
          ref={this.setDictionaryContentRef}
        >
          {this.state.content
            ? <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
            : <i>Carregando...</i>
          }
        </div>
        <div
          {...props}
          onClick={this.onSelectText}
        >
          {children}
        </div>
      </div>
    )
  }
}

export default TextWithDictionary
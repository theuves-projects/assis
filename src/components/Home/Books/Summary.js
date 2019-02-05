import React, { Component } from 'react'
import './Summary.css'

const summaries = [{
    text: require('../../../content/summaries/a-mao-e-a-luva.md')
  }, {
    text: require('../../../content/summaries/dom-casmurro.md')
  }, {
    text: require('../../../content/summaries/esau-e-jaco.md')
  }, {
    text: require('../../../content/summaries/helena.md')
  }, {
    text: require('../../../content/summaries/iaia-garcia.md')
  }, {
    text: require('../../../content/summaries/memorial-de-aires.md')
  }, {
    text: require('../../../content/summaries/memorias-postumas-de-bras-cubas.md')
  }, {
    text: require('../../../content/summaries/quincas-borba.md')
  }, {
    text: require('../../../content/summaries/ressurreicao.md')
}]

class Summary extends Component {
  componentDidUpdate() {

    // Volta ao topo quando o elemento for atualizado.
    this
      ._reactInternalFiber
      .child
      .stateNode
      .parentElement
      .scrollTo(0, 0)
  }
  render() {
    const { bookIndex } = this.props

    return (
      <article
        className='Home_Books_Summary'
        dangerouslySetInnerHTML={{
          __html: summaries[bookIndex].text
        }}
      />
    )
  }
}

export default Summary
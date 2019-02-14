import React, { Component } from 'react'
import './Dropdown.css'

class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.open = this.open.bind(this)
    this.handleClick = this.handleClick.bind(this)

    const { bookCode } = this.props

    this.state = {
      isOpen: false,
      id: `dropdownBook${bookCode}`
    }
  }
  componentDidMount() {
    window.addEventListener('click', this.handleClick)
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.handleClick)
  }

  // Vai verificar se o item clicado na
  // tela faz parte do dropdown, caso contrário o
  // dropdown será automaticamente fechado.
  handleClick(event) {
    if (!this.state) return
    const { id } = this.state
    const { target } = event
    const el = document.getElementById(id)
    if (!target || !el) return
    if (!el.contains(target) && target.id !== id) {
      this.setState({
        isOpen: false
      })
    }
  }
  open() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    const { icon, children } = this.props

    return (
      <div
        id={this.state.id}
        className='Dashboard_BookList_Dropdown'
      >
        <button
          className='Dashboard_BookList_Dropdown-btn'
          onClick={this.open}
        >
          <i className={`fas fa-${icon}`}></i>
        </button>
        {this.state.isOpen ? (
          <div className='Dashboard_BookList_Dropdown-content'>
            {children}
          </div>
        ) : (
          null
        )}
      </div>
    )
  }
}

export default Dropdown
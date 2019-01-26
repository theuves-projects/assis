import React, { Component } from 'react'

// Components
import Summary from './Summary'
import List from './List'

// Styles
import './Books.css'

class Books extends Component {
  constructor(props) {
    super(props)
    this.onSelectBook = this.onSelectBook.bind(this)
    this.state = {
      bookIndex: 0
    }
  }
  onSelectBook(index) {
    if (this.state.index === index) {
      return
    }

    this.setState({
      bookIndex: index
    })
  }
  render() {
    return (
      <section className='Home_Books'>
        <div className='container'>
          <h1 className='Home_Books-title'>
            Os principais romances do Bruxo do Cosme Velho em um único lugar
          </h1>
          <div className='Home_Books-container'>
            <div className="Home_Books-summary">
              <Summary
                bookIndex={this.state.bookIndex}
              />
            </div>
            <div className="Home_Books-list">
              <List
                onSelectBook={this.onSelectBook}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Books
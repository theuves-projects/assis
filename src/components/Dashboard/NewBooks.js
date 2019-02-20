import React, { Component } from 'react'
import { auth, database } from 'firebase'

// Utils
import bookList from '../../utils/books'
import resolveBooksCode from '../../utils/resolveBooksCode'

// Components
import Checkbox from '../Checkbox'

// Styles
import './NewBooks.css'

class NewBooks extends Component {
  constructor(props) {
    super(props)

    this.handleCheckbox = this.handleCheckbox.bind(this)

    const defaultState = {
      reading: [],
      read: []
    }

    this.state = Object.assign(defaultState, this.props.books)
  }
  componentWillUpdate(_, nextState) {
    database().ref(`users/${this.getUserId()}/books`).set(nextState)
  }
  getUserId() {
    return auth().currentUser.uid
  }
  handleCheckbox(isChecked, bookCode, status) {
    if (!this.state) return

    // Se estiver ativado, o livro vai ser adicionado, senão, será removido.
    const isAdding = isChecked

    this.setState({
      [status]: resolveBooksCode(this.state[status], bookCode, isAdding)
    })
  }
  render() {
    return (
      <div>
        {bookList.map((book, bookCode) => (
          <div
            className='Dashboard_NewBooks-items'
            key={bookCode}
          >
            <div className='Dashboard_NewBooks-name'>
              <cite>{book.title}</cite> (<time>{book.year}</time>)
            </div>
            <div className='Dashboard_NewBooks-checkbox'>
              <Checkbox
                isChecked={this.state.reading.includes(bookCode)}
                onChange={(isChecked) =>
                  this.handleCheckbox(
                    isChecked,
                    bookCode,
                    'reading'
                  )
                }
              />
              <span>Lendo?</span>
            </div>
            <div className='Dashboard_NewBooks-checkbox'>
              <Checkbox
                isChecked={this.state.read.includes(bookCode)}
                onChange={(isChecked) =>
                  this.handleCheckbox(
                    isChecked,
                    bookCode,
                    'read'
                  )
                }
              />
              <span>Lido?</span>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default NewBooks
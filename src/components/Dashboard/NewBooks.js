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
  handleCheckbox(value, bookCode, status) {
    if (!this.state) return
    const action = value === 'true' ? 'remove' : 'add'
    this.setState({
      [status]: resolveBooksCode(this.state[status], bookCode, action)
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
                checked={this.state.reading.includes(bookCode)}
                onClick={
                  (event) =>
                    this.handleCheckbox(
                      event.target.dataset.checked,
                      bookCode,
                      'reading'
                    )
                }
              />
              <span>Lendo?</span>
            </div>
            <div className='Dashboard_NewBooks-checkbox'>
              <Checkbox
                checked={this.state.read.includes(bookCode)}
                onClick={
                  (event) =>
                    this.handleCheckbox(
                      event.target.dataset.checked,
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
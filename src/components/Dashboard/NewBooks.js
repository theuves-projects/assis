import React, { Component } from 'react'
import { auth, database } from 'firebase'
import bookList from '../../utils/books'
import Checkbox from './Checkbox'
import './NewBooks.css'

class NewBooks extends Component {
  constructor(props) {
    super(props)

    this.handleCheckbox = this.handleCheckbox.bind(this)
    this.resolveBooksCode = this.resolveBooksCode.bind(this)

    this.state = Object.assign({
      reading: [],
      read: []
    }, this.props.books)
  }
  componentWillUpdate(_, nextState) {
    database().ref(`users/${this.getUserId()}/books`).set(nextState)
  }
  getUserId() {
    return auth().currentUser.uid
  }
  resolveBooksCode(data = [], isChecked, bookCode) {
    data = [...data]

    if (!isChecked) {
      if (data.includes(bookCode)) return data
      return data.concat(bookCode)
    }

    return data.filter((bookCode_) => bookCode_ !== bookCode)
  }
  handleCheckbox(value, bookCode, type) {
    if (!this.state) return
    value = value === 'true' ? true : false

    switch (type) {
      case 'reading': {
        this.setState({
          reading: this.resolveBooksCode(this.state.reading, value, bookCode)
        })
        break
      }
      case 'read': {
        this.setState({
          read: this.resolveBooksCode(this.state.read, value, bookCode)
        })
        break
      }
    }
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
              <span>Lido!</span>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default NewBooks
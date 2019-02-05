import React, { Component } from 'react'
import { auth, database } from 'firebase'
import bookList from '../../utils/books'
import './NewBooks.css'

class NewBooks extends Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
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
  resolveBooksCode(data = [], check, bookCode) {
    data = [...data]

    if (check) {
      if (data.includes(bookCode)) {
        return data
      }

      return data.concat(bookCode)
    }

    return data.filter((_bookCode) => _bookCode !== bookCode)
  }
  onChange(value, bookCode, type) {
    if (!this.state) return

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
              <label htmlFor={`checkerReading${bookCode}`}>
                <input
                  id={`checkerReading${bookCode}`}
                  type='checkbox'
                  checked={this.state.reading.includes(bookCode)}
                  onChange={(event) => this.onChange(event.target.checked, bookCode, 'reading')}
                />
                {` `}
                Lendo?
              </label>
            </div>
            <div className='Dashboard_NewBooks-checkbox'>
              <label htmlFor={`checkerRead${bookCode}`}>
                <input
                  id={`checkerRead${bookCode}`}
                  type='checkbox'
                  checked={this.state.read.includes(bookCode)}
                  onChange={(event) => this.onChange(event.target.checked, bookCode, 'read')}
                />
                {` `}
                Lido?
              </label>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default NewBooks
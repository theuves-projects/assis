import React, { Component } from 'react'
import { auth, database } from 'firebase'

// Components
import Loading from '../Loading'
import Profile from './Profile'
import Content from './Content'
import NewBooks from './NewBooks'
import BookList from './BookList/BookList'

// Styles
import './Dashboard.css'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uid: auth().currentUser.uid
    }
  }
  render() {
    return (
      <section className='Dashboard'>
        <div className='container'>
          <div className="Dashboard-row">
            <div className="Dashboard-profile">
              <Profile
                uid={this.state.uid}
                name={this.props.data.name}
                username={this.props.data.username}
              />
            </div>
            <div className="Dashboard-content">
              <Content option={this.props.match.params.option}>
                {(() => {
                  switch (this.props.match.params.option) {
                    case 'new':
                      return <NewBooks books={this.props.data.books} />
                    case 'read':
                      return <BookList booksCode={this.props.data.books.read} />
                    case 'reading':
                      return <BookList booksCode={this.props.data.books.reading} />
                    default:
                      return <BookList booksCode={this.props.data.books.reading} />
                  }
                })()}
              </Content>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Dashboard
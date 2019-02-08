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
    const isLoggedIn = !!auth().currentUser
    const uid = isLoggedIn ? uid : null

    if (isLoggedIn) {
      this.state = {
        isLoggedIn: true,
        userExists: true,
        uid: auth().currentUser.uid,
        data: this.props.data
      }
    } else {
      this.state = {}
      const username = this.props.match.params.username

      database().ref(`users`).once('value', (snapshot) => {
        if (!this.state) return

        const data = snapshot.val()
        const userData = Object
          .values(data)
          .find((user) => user.username === username) || {}

        this.setState({
          userExists: Object.keys(userData).length !== 0,
          isLoggedIn: false,
          uid: userData.uid,
          data: userData
        })
      })
    }
  }
  render() {
    if (!this.state.data) return <Loading msg='Carregando usuário...' />
    if (!this.state.userExists) return (
      <div className='container'>
        <h1 className='Dashboard-userNotFound'>
          Usuário não existe!
        </h1>
      </div>
    )

    return (
      <section className='Dashboard'>
        <div className='container'>
          <div className="Dashboard-row">
            <div className="Dashboard-profile">
              <Profile
                uid={this.state.uid}
                name={this.state.data.name}
                username={this.state.data.username}
              />
            </div>
            <div className="Dashboard-content">
              <Content
                isLoggedIn={this.state.isLoggedIn}
                option={this.props.match.params.option || 'reading'}
                url={this.props.match.url}
              >
                {(() => {
                  switch (this.props.match.params.option || 'reading') {
                    case 'new':
                      // Se não estiver logado então nào pula para próxima verificação.
                      if (this.state.isLoggedIn) return <NewBooks books={this.state.data.books} />
                    case 'read':
                      return (
                        <BookList
                          isLoggedIn={this.state.isLoggedIn}
                         booksCode={this.state.data.books.read}
                        />
                      )
                    case 'reading':
                      return (
                        <BookList
                          isLoggedIn={this.state.isLoggedIn}
                          booksCode={this.state.data.books.reading}
                        />
                      )
                    default:
                      return <h1>Não encontrado!</h1>
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
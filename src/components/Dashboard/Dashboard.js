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
    const { uid, data, userExists, isLoggedIn } = this.state
    const { option } = this.props.match.params
    const { url } = this.props.match

    if (!data) return <Loading msg='Carregando usuário...' />
    if (!userExists) return (
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
                uid={uid}
                name={data.name}
                username={data.username}
              />
            </div>
            <div className="Dashboard-content">
              {/(read|reading)/.test(option)}
              <Content
                isLoggedIn={isLoggedIn}
                option={option}
                url={url}
              >
                {(() => {
                  switch (option || 'reading') {
                    case 'new':
                      // Se não estiver logado então nào pula para próxima verificação.
                      if (isLoggedIn) return <NewBooks books={data.books} />
                    case 'read':
                      return (
                        <BookList
                          isLoggedIn={isLoggedIn}
                          booksCode={data.books.read}
                        />
                      )
                    case 'reading':
                      return (
                        <BookList
                          isLoggedIn={isLoggedIn}
                          booksCode={data.books.reading}
                        />
                      )
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
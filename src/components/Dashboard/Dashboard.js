import React, { Component } from 'react'
import { auth, database } from 'firebase'
import resolveBooksCode from '../../utils/resolveBooksCode'

// Components
import Loading from '../Loading'
import Profile from './Profile'
import Content from './Content'
import NewBooks from './NewBooks'
import BookList from './BookList/BookList'

// Styles
import './Dashboard.css'

const READ = 'read'
const READING = 'reading'
const ADD = 'add'
const REMOVE = 'remove'
const NEW = 'new'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.updateBookStatus = this.updateBookStatus.bind(this)

    const isLoggedIn = !!auth().currentUser
    const uid = (auth().currentUser || {}).uid
    const username = this.props.match.params.username

    if (isLoggedIn && !username) {
      this.state = {
        isLoggedIn: true,
        userExists: true,
        uid: uid,
        authUid: uid,
        data: this.props.data
      }
    } else {
      this.state = {}

      database().ref('users').once('value', (snapshot) => {
        if (!this.state) return

        const data = snapshot.val()
        const userData = Object
          .values(data)
          .find((user) => user.username === username) || {}

        this.setState({
          userExists: Object.keys(userData).length !== 0,
          isLoggedIn: false,
          uid: userData.uid,
          authUid: isLoggedIn ? uid : null,
          data: userData
        })
      })
    }
  }
  // Ver `componentWillReceiveProps()`
  componentWillUpdate(nextProps) {
    if (JSON.stringify(this.props.data) !== JSON.stringify(nextProps.data)) {
       this.setState({
         data: nextProps.data
       })
    }
  }
  getUserId() {
    return auth().currentUser.uid
  }
  /**
   * Faz a atualização do status dum livro, ou seja, quando o usuário altera a
   * infomação de que está lendo ou já leu determinado livro.
   * 
   * Altera o banco de dados e o estado (state) do componente.
   *
   * @param {number} bookCode Código do livro.
   * @param {string} status Status do livro: 'read' ou 'reading'.
   * @param {string} action Ação a ser executada: remover ou adicionar livro na lista.
   * @returns {undefined}
   */
   updateBookStatus(bookCode, status, action) {
      if (!this.state) return
      if (!RegExp(`^(${READ}|${READING})$`).test(status)) {
        throw new Error(`O status "${status}" é inválido`)
      }
      if (!RegExp(`^(${ADD}|${REMOVE})$`).test(action)) {
        throw new Error(`A ação "${action}" é inválida`)
      }

      const books = this.state.data.books
      const newBooksState = Object.assign({}, books, {
        [status]: resolveBooksCode(books[status], bookCode, action)
      })

      database().ref(`users/${this.getUserId()}/books`).set(newBooksState)
   }
  render() {
    const { uid, authUid, data, userExists, isLoggedIn } = this.state
    const { option } = this.props.match.params
    const { url } = this.props.match

    if (!data) return <Loading msg='Carregando usuário...' />
    if (!userExists) return (
      <div className='container'>
        <h1 className='Dashboard-userNotFound'>
          <i className='fas fa-user-times'></i>
          <br/>
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
              <Content
                isLoggedIn={isLoggedIn}
                option={option}
                url={url}
              >
                {(() => {
                  switch (option || READING) {
                    case NEW:
                      // Se não estiver logado então nào pula para próxima verificação.
                      if (isLoggedIn) return <NewBooks books={data.books} />
                    case READ:
                    case READING:
                      return (
                        <BookList
                          status={option || READING}
                          isLoggedIn={isLoggedIn}
                          uid={uid}
                          authUid={authUid}
                          booksInformation={data.books}
                          onChangeConfig={this.updateBookStatus}
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
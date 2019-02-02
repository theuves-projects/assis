import React, { Component } from 'react'
import { auth, database } from 'firebase'

// Components
import Profile from './Profile'
import Content from './Content/Content'

// Styles
import './Dashboard.css'

class Dashboard extends Component {
  constructor(props) {
    super(props)

    const userId = auth().currentUser.uid

    this.state = {
      uid: userId
    }

    database().ref(`users/${userId}`).on('value', (snapshot) => {
      this.setState(snapshot.val())
    })
  }
  render() {
    return (
      <section className='Dashboard'>
        <div className='container'>
          <div className="Dashboard-row">
            <div className="Dashboard-profile">
              <Profile
                uid={this.state.uid}
                name={this.state.name}
                username={this.state.username}
              />
            </div>
            <div className="Dashboard-content">
              <Content />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Dashboard
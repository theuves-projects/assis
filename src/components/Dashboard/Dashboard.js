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

    database().ref(`users/${userId}`).on('value', (snapshot) => {
      console.log(snapshot)
    })
  }
  render() {
    return (
      <section className='Dashboard'>
        <div className='container'>
          <div className="Dashboard-row">
            <div className="Dashboard-profile">
              <Profile />
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
import React from 'react'

// Components
import Profile from './Profile'
import Content from './Content/Content'

// Styles
import './Dashboard.css'

const Dashboard = () => (
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

export default Dashboard
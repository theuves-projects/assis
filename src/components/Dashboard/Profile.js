import React from 'react'

// Components
import Avatar from '../Avatar'

// Styles
import './Profile.css'

const Profile = ({
  uid,
  name,
  username
}) => (
  <div className='Dashboard_Profile'>
    <Avatar
      uid={uid}
      className='Dashboard_Profile-avatar'
    />
    <header>
      <h1 className='Dashboard_Profile-name'>
        {name}
      </h1>
      <p className='Dashboard_Profile-username'>
        @{username}
      </p>
    </header>
  </div>
)

export default Profile
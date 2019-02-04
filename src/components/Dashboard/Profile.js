import React from 'react'

// Styles
import './Profile.css'

const Profile = ({
  uid,
  name,
  username
}) => (
  <div className='Dashboard_Profile'>
    <img
      src={`https://api.adorable.io/avatars/200/${uid}.png`}
      className='Dashboard_Profile-avatar'
    />
    <h1 className='Dashboard_Profile-name'>
      {name}
    </h1>
    <p className='Dashboard_Profile-username'>
      @{username}
    </p>
  </div>
)

export default Profile
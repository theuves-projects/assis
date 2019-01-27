import React from 'react'

// Styles
import './Profile.css'

const Profile = () => (
  <div class='Dashboard_Profile'>
    <img
      src='https://api.adorable.io/avatars/200/123.png'
      className='Dashboard_Profile-avatar'
    />
    <h1 className='Dashboard_Profile-name'>Fulano de Tal</h1>
    <p className='Dashboard_Profile-username'>@fulano</p>
  </div>
)

export default Profile
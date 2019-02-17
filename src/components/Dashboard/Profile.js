import React from 'react'
// import getAvatar from '../../utils/getAvatar'
import Avatar from '../Avatar'
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
    <h1 className='Dashboard_Profile-name'>
      {name}
    </h1>
    <p className='Dashboard_Profile-username'>
      @{username}
    </p>
  </div>
)

export default Profile
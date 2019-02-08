import React from 'react'
import './Loading.css'

const Loading = ({ msg }) => (
  <div>
    <div className='Loading-icon'></div>
    <p className='Loading-text'>
      {msg || 'Carregando...'}
    </p>
  </div>
)

export default Loading
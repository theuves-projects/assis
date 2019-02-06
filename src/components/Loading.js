import React from 'react'
import './Loading.css'

const Loading = ({ children }) => (
  <div>
    <div className='Loading-icon'></div>
    <p className='Loading-text'>
      {children || 'Carregando...'}
    </p>
  </div>
)

export default Loading
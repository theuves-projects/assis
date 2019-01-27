import React from 'react'

// Styles
import './Content.css'

const Content = () => (
  <div className='Dashboard_Content'>
    <header className='Dashboard_Content-header'>
      <button className='Dashboard_Content-btn'>
        <i class="fas fa-bookmark"></i>
        {` `}
        Lendo....
      </button>
      <button className='Dashboard_Content-btn'>
        <i class="fas fa-book"></i>
        {` `}
        Lidos!
      </button>
      <button className="Dashboard_Content-btn">
        <i class="fas fa-plus-circle"></i>
        {` `}
        Novo
      </button>
    </header>

  </div>
)

export default Content
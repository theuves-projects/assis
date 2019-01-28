import React from 'react'

// Styles
import './Content.css'

// Components
import BookList from './BookList'
import NewBooks from './NewBooks'

const Content = () => (
  <div className='Dashboard_Content'>

    {/* Header */}
    <header className='Dashboard_Content-header'>
      <div>
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
      </div>
      <div>
        <button className="Dashboard_Content-btn-new">
          <i class="fas fa-plus-circle"></i>
          {` `}
          Novo
        </button>
      </div>
    </header>

    {/* <BookList /> */}
    <NewBooks />
  </div>
)

export default Content
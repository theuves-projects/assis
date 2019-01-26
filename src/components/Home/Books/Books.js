import React from 'react'

// Components
import Summary from './Summary'
import List from './List'

// Styles
import './Books.css'

const Books = () => (
  <section className='Home_Books'>
    <div className='container'>
      <h1 className='Home_Books-title'>
        Os principais romances do Bruxo do Cosme Velho em um único lugar
      </h1>
      <div className='Home_Books-container'>
        <div className="Home_Books-summary">
          <Summary />
        </div>
        <div className="Home_Books-list">
          <List />
        </div>
      </div>
    </div>
  </section>
)

export default Books
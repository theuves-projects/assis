import React, { Fragment } from 'react'

// Components
import Apresentation from './Apresentation/Apresentation'
import Books from './Books/Books'

const Home = () => (
  <Fragment>
    <Apresentation />
    <Books />
  </Fragment>
)

export default Home
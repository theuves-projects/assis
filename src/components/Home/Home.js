import React, { Fragment } from 'react'

// Components
import Apresentation from './Apresentation/Apresentation'
import Books from './Books/Books'
import Bio from './Bio'

const Home = () => (
  <Fragment>
    <Apresentation />
    <Books />
    <Bio />
  </Fragment>
)

export default Home
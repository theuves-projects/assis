import React, { Fragment } from 'react'

// Components
import Apresentation from './Apresentation/Apresentation'
import Books from './Books/Books'
import Bio from './Bio'
import Footer from './Footer'

const Home = () => (
  <Fragment>
    <Apresentation />
    <Books />
    <Bio />
    <Footer />
  </Fragment>
)

export default Home
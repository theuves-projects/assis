import React, { Fragment } from 'react'

// Components
import Apresentation from './Apresentation'
import Books from './Books'
import Bio from './Bio'
import Footer from './Footer'

const Home = ({ history }) => (
  <Fragment>
    <Apresentation redirectTo={history.push} />
    <Books />
    <Bio />
    <Footer />
  </Fragment>
)

export default Home
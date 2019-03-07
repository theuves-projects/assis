import React, { Fragment } from 'react'
import Header from '../Header'

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    {children}
  </Fragment>
)

export default Layout
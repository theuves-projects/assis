import React, { Fragment } from 'react'
import Header from './Header.js'

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    {children}
  </Fragment>
)

export default Layout
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Home from './pages/home'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  #root,
  html,
  body {
    height: 100%;
    font-family: Roboto, Helvetica, sans-serif;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  )
}

export default App
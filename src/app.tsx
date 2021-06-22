import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Home from './pages/home'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  body,
  input,
  select {
    font-family: Verdana, Arial, sans-serif;
  }
  #root,
  html,
  body {
    height: 100%;
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
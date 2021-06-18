import React from 'react'
import styled from 'styled-components'
import Header from './header'
import backgroundSource from '../../img/background.jpg'

function Home() {
  return (
    <Container>
      <Main>
        <Header />
      </Main>
      <Image />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #eee;
`

const Main = styled.main`
  flex: 1;
`

const Image = styled.div`
  position: relative;
  width: 500px;
  background-image: url(${backgroundSource});
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgb(20 255 230 / 20%);
  }
`

export default Home
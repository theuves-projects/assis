import React from 'react'
import styled from 'styled-components'
import Header from './header'
import Card from '../../components/card'
import backgroundSource from '../../img/background.jpg'
import books from '../../data/books.json'

function Home() {
  return (
    <Container>
      <Image />
      <Main>
        <Header />
        <Content>
          <Grid>
            {books.map((book => (
              <div>
                <Card
                  color="#67604d"
                  title={book.title}
                  year={book.year}
                />
              </div>
            )))}
          </Grid>
        </Content>
      </Main>
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
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Image = styled.div`
  position: relative;
  width: 500px;
  background-image: url(${backgroundSource});
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgb(0 0 0 / 30%);
  }
`

const Content = styled.div`
  padding: 20px;
  overflow-y: auto;
`

const Grid = styled.div`
  --grid-gap: 20px;
  margin: 0 auto;
  width: 720px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, calc((100% - 2 * var(--grid-gap)) / 3));
  grid-gap: var(--grid-gap);
`

export default Home
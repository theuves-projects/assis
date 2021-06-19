import React from 'react'
import styled from 'styled-components'
import Color from 'color'

interface Props {
  color: string,
  title: string,
  year: number,
}

function Card({ color, title, year }: Props) {
  return (
    <CardStyled>
      <Main color={color}>
        <Title>
          {title}
        </Title>
        <Year>
          {year}
        </Year>
      </Main>
      <Footer>
        <Button>
          Ler online
        </Button>
      </Footer>
    </CardStyled>
  )
}

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: white;
`

const Main = styled.div<{color: string}>`
  background-image: linear-gradient(-45deg, ${props => Color(props.color).darken(0.05).hex()} 50%, ${props => props.color} 50%);
  color: white;
`

const Footer = styled.div`
  padding: 15px;
`

const Title = styled.h3`
  padding: 60px 0 30px 0;
  text-transform: uppercase;
`

const Year = styled.p`
  padding: 30px 0;
`

const Button = styled.div`
  padding: 6px 0;
  border: solid 1px #333;
  border-radius: 3px;
`

export default Card
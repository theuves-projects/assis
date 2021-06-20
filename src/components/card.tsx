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
        <TitleContainer>
          <Title>
            {title}
          </Title>
        </TitleContainer>
        <Year>
          {year}
        </Year>
      </Main>
      <Footer>
        <Button href="#">
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
  box-shadow: 1px 1px 3px 0 #aaa;
  background-color: white;
`

const Main = styled.div<{color: string}>`
  background-image: linear-gradient(-45deg, ${props => Color(props.color).darken(0.1).hex()} 50%, ${props => props.color} 50%);
  color: white;
`

const Footer = styled.div`
  padding: 15px;
`

const Title = styled.h3`
  text-transform: uppercase;
  line-height: 1.25;
`

const TitleContainer = styled.div`
  display: flex;
  height: 130px;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
`

const Year = styled.p`
  padding-bottom: 30px;
`

const Button = styled.a`
  display: block;
  text-decoration: none;
  color: #333;
  padding: 6px 0;
  border: solid 1px #333;
  border-radius: 3px;
`

export default Card
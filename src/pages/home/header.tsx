import React from 'react'
import styled from 'styled-components'
import quillSource from '../../img/logo.svg'

function Header() {
  return (
    <HeaderStyled>
      <Container>
        <div>
          <TitleContainer>
            <div>
              <QuillImage src={quillSource} />
            </div>
            <div>
              <Title>
                Machado de Assis
              </Title>
            </div>
          </TitleContainer>
        </div>
        <SearchBoxContainer>
          <SearchBox placeholder="Buscar..." />
        </SearchBoxContainer>
      </Container>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  position: relative;
  padding: 12px 0;
  box-shadow: 3px 0 3px 2px rgba(0 0 0 / 30%);
  background-color: white;
  border-bottom: dashed 1px white;
  font-family: 'Merriweather', serif;
  font-size: .9em;
`

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const SearchBoxContainer = styled.div`
`

const SearchBox = styled.input`
  outline: none;
  padding: 8px 16px;
  border: solid 1px #aaa;

  &::placeholder {
    color: #888;
  }
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`

const QuillImage = styled.img`
  width: 2em;
  margin-right: 15px;
`

const Title = styled.h1`
  font-size: 2em;
`

export default Header
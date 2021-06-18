import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <HeaderStyled>
      <Container>
        <div>
          <h1>
            assis
          </h1>
        </div>
        <div>
          <SearchBox placeholder="Buscar..." />
        </div>
      </Container>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  padding: 10px 50px;
  box-shadow: 0 0 3px 2px #ccc;
  background-color: white;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const SearchBox = styled.input`
  outline: none;
  padding: 8px 16px;
  border-radius: 16px;
  border: solid 1px #888;
`

export default Header
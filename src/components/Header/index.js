import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import { auth, database } from 'firebase'
import { Header as HeaderContainer, Content, Title, Actions, Button, Icon } from "./styles";
import { Container } from '../../styles/container';


// Styles
import NotLogged from './NotLogged';
import Logged from './Logged';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  verifyUserState = () => {
    switch (this.state.isLoggedIn) {
      case true:
        return <Logged />
      case false:
        return <NotLogged />
      default:
        return "Carregando...";
    }
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <HeaderContainer className='Header'>
        <Container>
          <Content>
            <h1>
              <Title to={isLoggedIn ? '/dashboard' : '/'}>
                Assis
              </Title>
            </h1>
            <Actions>
              {this.verifyUserState()}
            </Actions>
          </Content>
        </Container>
      </HeaderContainer>
    )
  }
}

export default Header
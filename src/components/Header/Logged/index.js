import React, { Component } from 'react';
import { UserAvatar } from './styles';
import { LinkButton } from '../styles';
import { auth, database } from 'firebase'
import getFirstName from '../../../utils/getFirstName';

class Logged extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    auth().onAuthStateChanged((user) => {
      this.refreshData()
    })
  }

  refreshData = () => {
    const isLoggedIn = !!auth().currentUser

    if (isLoggedIn) {
      const uid = auth().currentUser.uid

      database().ref(`users/${uid}`).once('value', (snapshot) => {
        const data = snapshot.val()

        this.setState({
          isLoggedIn,
          uid,
          ...data
        })
      })
    } else {
      this.setState({ isLoggedIn })
    }
  }

  signOut = async () => {
    if (window.confirm('Deseja realmente finalizar a sessão?')) {
      try {
        await auth().signOut();
        window.location.assign("/");
      } catch (error) {
        window.alert("Algo deu errado!");
      }
    }
  }

  render() {
    const { uid, name } = this.state;

    return (
      <Fragment>
        <LinkButton to='/dashboard'>
          <span>
            {getFirstName(name)}
          </span>
          <UserAvatar uid={uid} alt='Avatar' />
        </LinkButton>
        <Button onClick={this.signOut}>
          Encerrar sessão
          <Icon className='fas fa-sign-out-alt'></Icon>
        </Button>
      </Fragment>
    )
  }

}

export default Logged;
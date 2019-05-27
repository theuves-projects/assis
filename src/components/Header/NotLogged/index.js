import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../styles';
import '../Header.css'


const NotLogged = () => (
  <Link
    className='Header-btn'
    to='/login'
  >
    Entrar na sua conta
    <Icon className="fas fa-sign-in-alt"></Icon>
  </Link>
);

export default NotLogged;
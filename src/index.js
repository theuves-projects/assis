import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
import firebase from 'firebase'
import firebaseConfig from '../firebaseConfig'
import GlobalStyle from './styles/global';

import Routes from './routes';

// Global styles
//import './styles/index.css'
import './styles/container.css'
import './styles/inputs.css'
import './styles/keyframes.css'

// Para evitar inicializar o mesmo app duas vezes.
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const App = () => (
  <>
  <GlobalStyle />
  <Routes />
  </>
);

const root = document.getElementById('root')
ReactDOM.render(<App />, root)

export default hot(App)
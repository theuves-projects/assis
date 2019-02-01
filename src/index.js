import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
import firebase from 'firebase'

// Components
import Layout from './components/Layout.js'
import Dashboard from './components/Dashboard/Dashboard'
import Book from './components/Book/Book'
import Home from './components/Home/Home'

// Global styles
import './styles/index.css'
import './styles/container.css'

firebase.initializeApp({
  apiKey: 'AIzaSyB-F9JWpEgpfq2GIRlsFbDEJHIFObHS1QY',
  authDomain: 'theuves-assis.firebaseapp.com',
  databaseURL: 'https://theuves-assis.firebaseio.com',
  projectId: 'theuves-assis',
  storageBucket: '',
  messagingSenderId: '1033287127339'
})

const App = () => (
  <Layout>
    <Home />
  </Layout>
)

const root = document.getElementById('root')

ReactDOM.render(<App />, root)

export default hot(App)
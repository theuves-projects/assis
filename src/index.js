import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
import Layout from './components/Layout.js'

// Global styles
import './styles/global.css'

// Styles components
import './styles/modules/container.css'

const App = () => (
  <Layout>
    
  </Layout>
)

const root = document.getElementById('root')

ReactDOM.render(<App />, root)

export default hot(App)
import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import Menu from './Menu'
import About from './About'
import Projects from './Projects'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Menu />
  <About />
  <Projects />
  </React.StrictMode>
)

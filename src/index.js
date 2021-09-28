import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/globals.css'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from '@mui/material/styles'
import { muiTheme } from './constants'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <ThemeProvider theme={muiTheme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
)

reportWebVitals()

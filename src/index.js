import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/globals.css'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from '@mui/material/styles'
import { muiTheme } from './constants'

ReactDOM.render(
  <ThemeProvider theme={muiTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)

reportWebVitals()

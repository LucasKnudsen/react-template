import React from 'react'
import { Toaster } from 'react-hot-toast'
import { toastOptions } from './constants'
import Routes from './navigation/Routes'

const App = () => {
  return (
    <>
      <Routes />
      <Toaster toastOptions={toastOptions} />
    </>
  )
}

export default App

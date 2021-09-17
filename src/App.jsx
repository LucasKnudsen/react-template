import React from 'react'
import Template from './screens/Template'
import { Toaster } from 'react-hot-toast'
import { toastOptions } from './constants'

const App = () => {
  return (
    <div>
      <Template />
      <Toaster toastOptions={toastOptions} />
    </div>
  )
}

export default App

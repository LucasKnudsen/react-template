import React, { useRef } from 'react'
import TextField from '@mui/material/TextField'
import { InputAdornment } from '@mui/material'

const InputField = ({ className, startIcon, mode, endIcon, ...props }) => {
  const getModeClassName = () => {
    switch (mode) {
      case 'rounded':
        return '--rounded'
      default:
        return ''
    }
  }

  return (
    <TextField
      className={['custom-input', getModeClassName(), className].join(' ')}
      margin='normal'
      InputProps={{
        startAdornment: <InputAdornment position='start'>{startIcon}</InputAdornment>,
        endAdornment: <InputAdornment position='start'>{endIcon}</InputAdornment>,
      }}
      {...props}
    />
  )
}

export default InputField

{
  /* <InputField
mode='rounded'
placeholder='Rounded custom'
startIcon={
  <div className='custom-icon-container'>
    <img className='custom-icon' src={icons.account} />{' '}
  </div>
}
/> */
}

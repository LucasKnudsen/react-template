import CircularProgress from '@mui/material/CircularProgress'
import React from 'react'

const PageLoader = ({ size = 40, thickness = 2.6, text, style, className }) => {
  return (
    <div className={['page-loader-container', className].join(' ')} style={style}>
      <CircularProgress size={size} thickness={thickness} />
      <h4>{text}</h4>
    </div>
  )
}

export default PageLoader

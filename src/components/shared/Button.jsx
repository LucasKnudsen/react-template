import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'

const Button = ({
  startIcon,
  endIcon,
  loading,
  loaderSize = 20,
  children,
  className,
  variant = 'primary',
  disabled,
  ...props
}) => {
  const getVariantClassName = () => {
    switch (variant) {
      case 'primary':
        return '--primary'

      case 'secondary':
        return '--secondary'

      case 'tertiary':
        return '--tertiary'

      case 'text':
        return '--text'

      case 'icon':
        return '--icon'

      default:
        return ''
    }
  }

  return (
    <button
      disabled={disabled || loading}
      className={['custom-button', getVariantClassName(), className].join(' ')}
      {...props}>
      {loading && <CircularProgress size={loaderSize} thickness={4} className='button-loader' />}
      <div className='content' style={{ visibility: loading ? 'hidden' : 'visible' }}>
        {startIcon && <div className='start-icon'>{startIcon}</div>}

        <h4>{children}</h4>

        {endIcon && <div className='end-icon'>{endIcon}</div>}
      </div>
    </button>
  )
}

export default Button

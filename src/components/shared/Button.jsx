import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@mui/material/CircularProgress'

const Button = forwardRef(
  (
    {
      startIcon,
      endIcon,
      loading,
      loaderSize = 20,
      children,
      mode,
      fontSize,
      style,
      margin,
      padding,
      className,
      variant = 'primary',
      disabled,
      ...props
    },
    ref
  ) => {
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

        case 'clean':
          return '--clean'

        default:
          return ''
      }
    }

    const getModeClassName = () => {
      switch (mode) {
        case 'icon':
          return '--icon'

        default:
          return ''
      }
    }

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={['custom-button', getVariantClassName(), getModeClassName(), className].join(
          ' '
        )}
        {...props}
        style={{ margin: margin, padding: padding, ...style }}>
        {loading && <CircularProgress size={loaderSize} thickness={4} className='button-loader' />}
        <div className='content' style={{ visibility: loading ? 'hidden' : 'visible' }}>
          {startIcon && <div className='start-icon'>{startIcon}</div>}

          <h4 style={{ fontSize: fontSize }}>{children}</h4>

          {endIcon && <div className='end-icon'>{endIcon}</div>}
        </div>
      </button>
    )
  }
)

export default Button

Button.propTypes = {
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  loading: PropTypes.bool,
  loaderSize: PropTypes.number,
  mode: PropTypes.oneOf(['icon']),
  style: PropTypes.object,
  fontSize: PropTypes.number,
  margin: PropTypes.string,
  padding: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'text']),
  disabled: PropTypes.bool,
}

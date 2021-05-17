import React from 'react'
import PropTypes from 'prop-types'
import { Button as MuiButton } from '@material-ui/core'

export const Button = (props) => {
  const {
    variant = 'outlined',
    size = 'small',
    color = 'primary',
    ...other
  } = props
  return <MuiButton variant={variant} size={size} color={color} {...other} />
}

Button.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary']),
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
  disableElevation: PropTypes.bool,
  endIcon: PropTypes.node,
  focusVisibleClassName: PropTypes.string,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  startIcon: PropTypes.node,
  type: PropTypes.oneOfType([
    PropTypes.oneOf(['button', 'reset', 'submit']),
    PropTypes.string
  ]),
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(['contained', 'outlined', 'text']),
    PropTypes.string
  ])
}

import React from 'react'
import PropTypes from 'prop-types'
import { IconButton as MuiIconButton } from '@material-ui/core'

export const IconButton = (props) => {
  const { color = 'primary', size = 'small', ...other } = props
  return <MuiIconButton color={color} size={size} {...other} />
}

IconButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  disabled: PropTypes.bool,
  disableFocusRipple: PropTypes.bool,
  disableRipple: PropTypes.bool,
  edge: PropTypes.oneOf(['end', 'start', false]),
  size: PropTypes.oneOf(['medium', 'small'])
}

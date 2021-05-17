import React from 'react'
import PropTypes from 'prop-types'
import { InputAdornment as MuiInputAdornment } from '@material-ui/core'

export const InputAdornment = (props) => {
  const { position = 'end', ...other } = props
  return <MuiInputAdornment position={position} {...other} />
}

InputAdornment.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  component: PropTypes.elementType,
  disablePointerEvents: PropTypes.bool,
  disableTypography: PropTypes.bool,
  position: PropTypes.oneOf(['end', 'start']),
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard'])
}

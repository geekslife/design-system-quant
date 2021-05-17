import React from 'react'
import PropTypes from 'prop-types'
import { refType } from '@material-ui/utils'
import { Switch as MuiSwitch } from '@material-ui/core'

export const Switch = (props) => {
  const { size = 'small', ...other } = props
  return <MuiSwitch size={size} {...other} />
}
Switch.propTypes = {
  checked: PropTypes.bool,
  checkedIcon: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  edge: PropTypes.oneOf(['end', 'start', false]),
  icon: PropTypes.node,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  inputRef: refType,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  size: PropTypes.oneOf(['medium', 'small']),
  value: PropTypes.any
}

import React from 'react'
import PropTypes from 'prop-types'
import { FormControl as MuiFormControl } from '@material-ui/core'

export const FormControl = (props) => {
  const { size = 'small', ...other } = props
  return <MuiFormControl size={size} {...other} />
}
FormControl.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  focused: PropTypes.bool,
  fullWidth: PropTypes.bool,
  hiddenLabel: PropTypes.bool,
  margin: PropTypes.oneOf(['dense', 'none', 'normal']),
  required: PropTypes.bool,
  size: PropTypes.oneOf(['medium', 'small']),
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard'])
}

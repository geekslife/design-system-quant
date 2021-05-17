import React from 'react'
import PropTypes from 'prop-types'
import { TextField as MuiTextField } from '@material-ui/core'
import { refType } from '@material-ui/utils'

export const TextField = (props) => {
  const { size = 'small', ...other } = props
  return <MuiTextField size={size} {...other} />
}
TextField.propTypes = {
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  FormHelperTextProps: PropTypes.object,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.node,
  id: PropTypes.string,
  InputLabelProps: PropTypes.object,
  inputProps: PropTypes.object,
  InputProps: PropTypes.object,
  inputRef: refType,
  label: PropTypes.node,
  margin: PropTypes.oneOf(['dense', 'none', 'normal']),
  maxRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  multiline: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  select: PropTypes.bool,
  SelectProps: PropTypes.object,
  size: PropTypes.oneOf(['medium', 'small']),
  type: PropTypes.string,
  value: PropTypes.any,
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard'])
}

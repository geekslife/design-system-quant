import React from 'react'
import PropTypes from 'prop-types'
import { refType } from '@material-ui/utils'
import { FormControlLabel as MuiFormControlLabel } from '@material-ui/core'

export const FormControlLabel = (props) => {
  return <MuiFormControlLabel {...props} />
}
FormControlLabel.propTypes = {
  checked: PropTypes.bool,
  classes: PropTypes.object,
  className: PropTypes.string,
  control: PropTypes.element.isRequired,
  disabled: PropTypes.bool,
  inputRef: refType,
  label: PropTypes.node,
  labelPlacement: PropTypes.oneOf(['bottom', 'end', 'start', 'top']),
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any
}

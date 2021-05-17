import React from 'react'
import PropTypes from 'prop-types'
import { InputLabel as MuiInputLabel } from '@material-ui/core'

export const InputLabel = (props) => {
  return <MuiInputLabel {...props} />
}
InputLabel.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  focused: PropTypes.bool,
  margin: PropTypes.oneOf(['dense']),
  required: PropTypes.bool,
  shrink: PropTypes.bool,
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard'])
}

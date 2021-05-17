import React from 'react'
import PropTypes from 'prop-types'
import { Divider as MuiDivider } from '@material-ui/core'

export const Divider = (props) => {
  return <MuiDivider {...props} />
}

Divider.propTypes = {
  absolute: PropTypes.bool,
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  component: PropTypes.elementType,
  flexItem: PropTypes.bool,
  light: PropTypes.bool,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  role: PropTypes.string,
  textAlign: PropTypes.oneOf(['center', 'left', 'right']),
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(['fullWidth', 'inset', 'middle']),
    PropTypes.string
  ])
}

import React from 'react'
import PropTypes from 'prop-types'
import { Chip as MuiChip, unsupportedProp } from '@material-ui/core'

export const Chip = (props) => {
  const { size = 'small', ...other } = props
  return <MuiChip size={size} {...other} />
}

Chip.propTypes = {
  avatar: PropTypes.element,
  children: unsupportedProp,
  classes: PropTypes.object,
  className: PropTypes.string,
  clickable: PropTypes.bool,
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  component: PropTypes.elementType,
  deleteIcon: PropTypes.element,
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  label: PropTypes.node,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  size: PropTypes.oneOf(['medium', 'small']),
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(['filled', 'outlined']),
    PropTypes.string
  ])
}

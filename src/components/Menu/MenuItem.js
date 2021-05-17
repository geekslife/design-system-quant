import React from 'react'
import PropTypes from 'prop-types'
import { MenuItem as MuiMenuItem } from '@material-ui/core'

export const MenuItem = React.forwardRef(function MenuItem(props, ref) {
  return <MuiMenuItem {...props} />
})

MenuItem.propTypes = {
  button: PropTypes.bool,
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  component: PropTypes.elementType,
  dense: PropTypes.bool,
  disabled: PropTypes.bool,
  disableGutters: PropTypes.bool,
  ListItemClasses: PropTypes.object,
  role: PropTypes.string,
  selected: PropTypes.bool,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

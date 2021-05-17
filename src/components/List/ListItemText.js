import React from 'react'
import PropTypes from 'prop-types'
import { ListItemText as MuiListItemText } from '@material-ui/core'
export const ListItemText = (props) => {
  return <MuiListItemText {...props} />
}

ListItemText.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  disableTypography: PropTypes.bool,
  inset: PropTypes.bool,
  primary: PropTypes.node,
  primaryTypographyProps: PropTypes.object,
  secondary: PropTypes.node,
  secondaryTypographyProps: PropTypes.object
}

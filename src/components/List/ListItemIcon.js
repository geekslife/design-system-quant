import React from 'react'
import PropTypes from 'prop-types'
import { ListItemIcon as MuiListItemIcon } from '@material-ui/core'
export const ListItemIcon = (props) => {
  return <MuiListItemIcon {...props} />
}

ListItemIcon.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string
}

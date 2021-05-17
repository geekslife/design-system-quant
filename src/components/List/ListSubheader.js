import React from 'react'
import PropTypes from 'prop-types'
import { ListSubheader as MuiListSubheader } from '@material-ui/core'
export const ListSubheader = (props) => {
  return <MuiListSubheader {...props} />
}

ListSubheader.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.oneOf(['default', 'inherit', 'primary']),
  component: PropTypes.elementType,
  disableGutters: PropTypes.bool,
  disableSticky: PropTypes.bool,
  inset: PropTypes.bool
}

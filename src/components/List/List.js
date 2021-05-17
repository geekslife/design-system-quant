import React from 'react'
import PropTypes from 'prop-types'
import { List as MuiList } from '@material-ui/core'
export const List = (props) => {
  return <MuiList {...props} />
}

List.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  component: PropTypes.elementType,
  dense: PropTypes.bool,
  disablePadding: PropTypes.bool,
  subheader: PropTypes.node
}

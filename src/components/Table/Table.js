import React from 'react'
import PropTypes from 'prop-types'
import { Table as MuiTable } from '@material-ui/core'

export const Table = (props) => {
  const { size = 'small', ...other } = props
  return <MuiTable size={size} {...other} />
}
Table.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  component: PropTypes.elementType,
  padding: PropTypes.oneOf(['checkbox', 'default', 'none']),
  size: PropTypes.oneOf(['medium', 'small']),
  stickyHeader: PropTypes.bool
}

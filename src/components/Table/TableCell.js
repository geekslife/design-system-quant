import React from 'react'
import PropTypes from 'prop-types'
import { TableCell as MuiTableCell } from '@material-ui/core'

export const TableCell = (props) => {
  const { size = 'small', align = 'left', ...other } = props
  return <MuiTableCell size={size} align={align} {...other} />
}
TableCell.propTypes = {
  align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  component: PropTypes.elementType,
  padding: PropTypes.oneOf(['checkbox', 'default', 'none']),
  scope: PropTypes.string,
  size: PropTypes.oneOf(['medium', 'small']),
  sortDirection: PropTypes.oneOf(['asc', 'desc', false]),
  variant: PropTypes.oneOf(['body', 'footer', 'head'])
}

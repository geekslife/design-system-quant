import React from 'react'
import PropTypes from 'prop-types'
import { TableRow as MuiTableRow } from '@material-ui/core'

export const TableRow = (props) => {
  return <MuiTableRow {...props} />
}
TableRow.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  component: PropTypes.elementType,
  hover: PropTypes.bool,
  selected: PropTypes.bool
}

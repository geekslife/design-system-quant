import React from 'react'
import PropTypes from 'prop-types'
import { TableBody as MuiTableBody } from '@material-ui/core'

export const TableBody = (props) => {
  return <MuiTableBody {...props} />
}
TableBody.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  component: PropTypes.elementType
}

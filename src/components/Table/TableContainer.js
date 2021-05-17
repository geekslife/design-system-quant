import React from 'react'
import PropTypes from 'prop-types'
import { TableContainer as MuiTableContainer } from '@material-ui/core'

export const TableContainer = (props) => {
  return <MuiTableContainer {...props} />
}
TableContainer.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  component: PropTypes.elementType
}

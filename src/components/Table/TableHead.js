import React from 'react'
import PropTypes from 'prop-types'
import { TableHead as MuiTableHead } from '@material-ui/core'

export const TableHead = (props) => {
  return <MuiTableHead {...props} />
}
TableHead.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  component: PropTypes.elementType
}

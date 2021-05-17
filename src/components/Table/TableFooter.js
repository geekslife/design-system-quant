import React from 'react'
import PropTypes from 'prop-types'
import { TableFooter as MuiTableFooter } from '@material-ui/core'

export const TableFooter = (props) => {
  return <MuiTableFooter {...props} />
}

TableFooter.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  component: PropTypes.elementType
}

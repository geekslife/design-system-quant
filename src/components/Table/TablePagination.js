import React from 'react'
import PropTypes from 'prop-types'
import { TablePagination as MuiTablePagination } from '@material-ui/core'
import { chainPropTypes } from '@material-ui/utils'

export const TablePagination = (props) => {
  return <MuiTablePagination {...props} />
}
TablePagination.propTypes = {
  ActionsComponent: PropTypes.elementType,
  backIconButtonProps: PropTypes.object,
  classes: PropTypes.object,
  className: PropTypes.string,
  colSpan: PropTypes.number,
  component: PropTypes.elementType,
  count: PropTypes.number.isRequired,
  getItemAriaLabel: PropTypes.func,
  labelDisplayedRows: PropTypes.func,
  labelRowsPerPage: PropTypes.node,
  nextIconButtonProps: PropTypes.object,
  onChangePage: PropTypes.func.isRequired,
  onChangeRowsPerPage: PropTypes.func,
  page: chainPropTypes(PropTypes.number.isRequired, (props) => {
    const { count, page, rowsPerPage } = props
    if (count === -1) {
      return null
    }
    const newLastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1)
    if (page < 0 || page > newLastPage) {
      return new Error(
        'Design-System-Quant: The page prop of a TablePagination is out of range ' +
          `(0 to ${newLastPage}, but page is ${page}).`
      )
    }
    return null
  }),
  rowsPerPage: PropTypes.number.isRequired,
  rowsPerPageOptions: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
      })
    ]).isRequired
  ),
  SelectProps: PropTypes.object,
  showFirstButton: PropTypes.bool,
  showLastButton: PropTypes.bool
}

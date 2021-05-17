import React from 'react'
import PropTypes from 'prop-types'
import { Select as MuiSelect } from '@material-ui/core'

export const Select = (props) => {
  return <MuiSelect {...props} />
}
Select.propTypes = {
  autoWidth: PropTypes.bool,
  children: PropTypes.node,
  classes: PropTypes.object,
  defaultValue: PropTypes.any,
  displayEmpty: PropTypes.bool,
  IconComponent: PropTypes.elementType,
  id: PropTypes.string,
  input: PropTypes.element,
  inputProps: PropTypes.object,
  label: PropTypes.node,
  labelId: PropTypes.string,
  labelWidth: PropTypes.number,
  MenuProps: PropTypes.object,
  multiple: PropTypes.bool,
  native: PropTypes.bool,
  onChange: PropTypes.func,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  open: PropTypes.bool,
  renderValue: PropTypes.func,
  SelectDisplayProps: PropTypes.object,
  value: PropTypes.any,
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard'])
}

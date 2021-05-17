import React from 'react'
import PropTypes from 'prop-types'
import { Tab as MuiTab, unsupportedProp } from '@material-ui/core'

export const Tab = (props) => {
  return <MuiTab {...props} />
}
Tab.propTypes = {
  children: unsupportedProp,
  classes: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  disableFocusRipple: PropTypes.bool,
  disableRipple: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  label: PropTypes.node,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.any,
  wrapped: PropTypes.bool
}

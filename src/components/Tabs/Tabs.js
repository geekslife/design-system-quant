import React from 'react'
import PropTypes from 'prop-types'
import { Tabs as MuiTabs } from '@material-ui/core'
import { refType } from '@material-ui/utils'

export const Tabs = (props) => {
  return <MuiTabs {...props} />
}
Tabs.propTypes = {
  action: refType,
  allowScrollButtonsMobile: PropTypes.bool,
  centered: PropTypes.bool,
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  component: PropTypes.elementType,
  indicatorColor: PropTypes.oneOf(['primary', 'secondary']),
  onChange: PropTypes.func,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  ScrollButtonComponent: PropTypes.elementType,
  scrollButtons: PropTypes.oneOf(['auto', false, true]),
  selectionFollowsFocus: PropTypes.bool,
  TabIndicatorProps: PropTypes.object,
  TabScrollButtonProps: PropTypes.object,
  textColor: PropTypes.oneOf(['inherit', 'primary', 'secondary']),
  value: PropTypes.any,
  variant: PropTypes.oneOf(['fullWidth', 'scrollable', 'standard']),
  visibleScrollbar: PropTypes.bool
}

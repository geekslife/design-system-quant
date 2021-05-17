import React from 'react'
import PropTypes from 'prop-types'
import { Toolbar as MuiToolbar } from '@material-ui/core'

export const Toolbar = (props) => {
  return <MuiToolbar {...props} />
}

Toolbar.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  component: PropTypes.elementType,
  disableGutters: PropTypes.bool,
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(['dense', 'regular']),
    PropTypes.string
  ])
}

import React from 'react'
import PropTypes from 'prop-types'
import { AppBar as MuiAppBar } from '@material-ui/core'

export const AppBar = (props) => {
  return <MuiAppBar {...props} />
}

AppBar.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'default',
    'inherit',
    'primary',
    'secondary',
    'transparent'
  ]),
  position: PropTypes.oneOf([
    'absolute',
    'fixed',
    'relative',
    'static',
    'sticky'
  ])
}

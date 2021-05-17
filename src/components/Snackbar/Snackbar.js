import React from 'react'
import PropTypes from 'prop-types'
import { Snackbar as MuiSnackbar } from '@material-ui/core'

export const Snackbar = (props) => {
  const {
    autoHideDuration = 5000,
    anchorOrigin = { horizontal: 'right', vertical: 'bottom' },
    ...other
  } = props

  return (
    <MuiSnackbar
      autoHideDuration={autoHideDuration}
      anchorOrigin={anchorOrigin}
      {...other}
    />
  )
}

Snackbar.propTypes = {
  action: PropTypes.node,
  anchorOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOf(['center', 'left', 'right']),
    vertical: PropTypes.oneOf(['bottom', 'top'])
  }),
  autoHideDuration: PropTypes.number,
  children: PropTypes.element,
  classes: PropTypes.object,
  className: PropTypes.string,
  ClickAwayListenerProps: PropTypes.object,
  ContentProps: PropTypes.object,
  disableWindowBlurListener: PropTypes.bool,
  key: PropTypes.any,
  message: PropTypes.node,
  onClose: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  open: PropTypes.bool,
  resumeHideDuration: PropTypes.number,
  TransitionComponent: PropTypes.elementType,
  transitionDuration: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      appear: PropTypes.number,
      enter: PropTypes.number,
      exit: PropTypes.number
    })
  ]),
  TransitionProps: PropTypes.object
}

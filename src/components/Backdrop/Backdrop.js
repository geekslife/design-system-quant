import React from 'react'
import PropTypes from 'prop-types'
import { Backdrop as MuiBackdrop } from '@material-ui/core'

export const Backdrop = (props) => {
  return <MuiBackdrop {...props} />
}

Backdrop.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  invisible: PropTypes.bool,
  open: PropTypes.bool.isRequired,
  transitionDuration: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      appear: PropTypes.number,
      enter: PropTypes.number,
      exit: PropTypes.number
    })
  ])
}

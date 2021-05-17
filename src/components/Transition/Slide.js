import React from 'react'
import PropTypes from 'prop-types'
import { Slide as MuiSlide } from '@material-ui/core'
import { elementAcceptingRef } from '@material-ui/utils'

export const Slide = React.forwardRef(function Slide(props, ref) {
  const { direction = 'up', ...other } = props
  return <MuiSlide direction={direction} {...other} />
})

Slide.propTypes = {
  appear: PropTypes.bool,
  children: elementAcceptingRef,
  direction: PropTypes.oneOf(['down', 'left', 'right', 'up']),
  in: PropTypes.bool,
  onEnter: PropTypes.func,
  onEntered: PropTypes.func,
  onEntering: PropTypes.func,
  onExit: PropTypes.func,
  onExited: PropTypes.func,
  onExiting: PropTypes.func,
  style: PropTypes.object,
  timeout: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      appear: PropTypes.number,
      enter: PropTypes.number,
      exit: PropTypes.number
    })
  ])
}

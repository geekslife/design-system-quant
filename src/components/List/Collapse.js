import React from 'react'
import PropTypes from 'prop-types'
import { elementTypeAcceptingRef } from '@material-ui/utils'
import { Collapse as MuiCollapse } from '@material-ui/core'

export const Collapse = (props) => {
  return <MuiCollapse {...props} />
}

Collapse.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  collapsedSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  component: elementTypeAcceptingRef,
  in: PropTypes.bool,
  onEnter: PropTypes.func,
  onEntered: PropTypes.func,
  onEntering: PropTypes.func,
  onExit: PropTypes.func,
  onExited: PropTypes.func,
  onExiting: PropTypes.func,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  style: PropTypes.object,
  timeout: PropTypes.oneOfType([
    PropTypes.oneOf(['auto']),
    PropTypes.number,
    PropTypes.shape({
      appear: PropTypes.number,
      enter: PropTypes.number,
      exit: PropTypes.number
    })
  ])
}

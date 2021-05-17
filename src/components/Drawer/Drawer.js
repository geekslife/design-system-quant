import React from 'react'
import PropTypes from 'prop-types'
import { Drawer as MuiDrawer } from '@material-ui/core'

export const Drawer = (props) => {
  return <MuiDrawer {...props} />
}

Drawer.propTypes = {
  anchor: PropTypes.oneOf(['bottom', 'left', 'right', 'top']),
  BackdropProps: PropTypes.object,
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  elevation: PropTypes.number,
  ModalProps: PropTypes.object,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  PaperProps: PropTypes.object,
  SlideProps: PropTypes.object,
  transitionDuration: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      appear: PropTypes.number,
      enter: PropTypes.number,
      exit: PropTypes.number
    })
  ]),
  variant: PropTypes.oneOf(['permanent', 'persistent', 'temporary'])
}

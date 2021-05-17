import React from 'react'
import PropTypes from 'prop-types'
import { Modal as MuiModal } from '@material-ui/core'
import { HTMLElementType } from '@material-ui/utils'

export const Modal = (props) => {
  return <MuiModal {...props} />
}
Modal.propTypes = {
  BackdropComponent: PropTypes.elementType,
  BackdropProps: PropTypes.object,
  children: PropTypes.node,
  closeAfterTransition: PropTypes.bool,
  container: PropTypes.oneOfType([HTMLElementType, PropTypes.func]),
  disableAutoFocus: PropTypes.bool,
  disableBackdropClick: PropTypes.bool,
  disableEnforceFocus: PropTypes.bool,
  disableEscapeKeyDown: PropTypes.bool,
  disablePortal: PropTypes.bool,
  disableRestoreFocus: PropTypes.bool,
  disableScrollLock: PropTypes.bool,
  hideBackdrop: PropTypes.bool,
  keepMounted: PropTypes.bool,
  onBackdropClick: PropTypes.func,
  onClose: PropTypes.func,
  onEscapeKeyDown: PropTypes.func,
  open: PropTypes.bool.isRequired
}

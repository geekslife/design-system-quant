import React from 'react'
import PropTypes from 'prop-types'
import { Alert as MuiAlert } from '@material-ui/lab'

export const Alert = (props) => <MuiAlert {...props} />

Alert.propTypes = {
  action: PropTypes.node,
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  closeText: PropTypes.string,
  color: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
  icon: PropTypes.node,
  iconMapping: PropTypes.shape({
    error: PropTypes.node,
    info: PropTypes.node,
    success: PropTypes.node,
    warning: PropTypes.node
  }),
  onClose: PropTypes.func,
  role: PropTypes.string,
  severity: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(['filled', 'outlined', 'standard']),
    PropTypes.string
  ])
}

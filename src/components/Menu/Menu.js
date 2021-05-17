import React from 'react'
import PropTypes from 'prop-types'
import { HTMLElementType } from '@material-ui/utils'
import { Menu as MuiMenu } from '@material-ui/core'
export const Menu = (props) => {
  return <MuiMenu {...props} />
}

export default Menu

Menu.propTypes = {
  anchorEl: PropTypes.oneOfType([HTMLElementType, PropTypes.func]),
  autoFocus: PropTypes.bool,
  children: PropTypes.node,
  classes: PropTypes.object,
  disableAutoFocusItem: PropTypes.bool,
  MenuListProps: PropTypes.object,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  PaperProps: PropTypes.object,
  PopoverClasses: PropTypes.object,
  transitionDuration: PropTypes.oneOfType([
    PropTypes.oneOf(['auto']),
    PropTypes.number,
    PropTypes.shape({
      appear: PropTypes.number,
      enter: PropTypes.number,
      exit: PropTypes.number
    })
  ]),
  TransitionProps: PropTypes.object,
  variant: PropTypes.oneOf(['menu', 'selectedMenu'])
}

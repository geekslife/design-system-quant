import React from 'react'
import PropTypes from 'prop-types'
import {
  chainPropTypes,
  elementTypeAcceptingRef,
  refType,
  HTMLElementType
} from '@material-ui/utils'
import { Popover as MuiPopover } from '@material-ui/core'

export const Popover = (props) => {
  const {
    anchorOrigin = { vertical: 'bottom', horizontal: 'center' },
    transformOrigin = {
      vertical: 'top',
      horizontal: 'center'
    },
    ...other
  } = props
  return (
    <MuiPopover
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      {...other}
    />
  )
}

function getAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl
}

Popover.propTypes = {
  action: refType,
  anchorEl: chainPropTypes(
    PropTypes.oneOfType([HTMLElementType, PropTypes.func]),
    (props) => {
      if (
        props.open &&
        (!props.anchorReference || props.anchorReference === 'anchorEl')
      ) {
        const resolvedAnchorEl = getAnchorEl(props.anchorEl)
        if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
          const box = resolvedAnchorEl.getBoundingClientRect()
          if (
            process.env.NODE_ENV !== 'test' &&
            box.top === 0 &&
            box.left === 0 &&
            box.right === 0 &&
            box.bottom === 0
          ) {
            return new Error(
              [
                'Design-System-Quant: The `anchorEl` prop provided to the component is invalid.',
                'The anchor element should be part of the document layout.',
                "Make sure the element is present in the document or that it's not display none."
              ].join('\n')
            )
          }
        } else {
          return new Error(
            [
              'Design-System-Quant: The `anchorEl` prop provided to the component is invalid.',
              `It should be an Element instance but it's \`${resolvedAnchorEl}\` instead.`
            ].join('\n')
          )
        }
      }
      return null
    }
  ),
  anchorOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOfType([
      PropTypes.oneOf(['center', 'left', 'right']),
      PropTypes.number
    ]).isRequired,
    vertical: PropTypes.oneOfType([
      PropTypes.oneOf(['bottom', 'center', 'top']),
      PropTypes.number
    ]).isRequired
  }),
  anchorPosition: PropTypes.shape({
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired
  }),
  anchorReference: PropTypes.oneOf(['anchorEl', 'anchorPosition', 'none']),
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  container: PropTypes.oneOfType([HTMLElementType, PropTypes.func]),
  elevation: PropTypes.number,
  getContentAnchorEl: PropTypes.func,
  marginThreshold: PropTypes.number,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  PaperProps: PropTypes.shape({
    component: elementTypeAcceptingRef
  }),
  transformOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOfType([
      PropTypes.oneOf(['center', 'left', 'right']),
      PropTypes.number
    ]).isRequired,
    vertical: PropTypes.oneOfType([
      PropTypes.oneOf(['bottom', 'center', 'top']),
      PropTypes.number
    ]).isRequired
  }),
  TransitionComponent: PropTypes.elementType,
  transitionDuration: PropTypes.oneOfType([
    PropTypes.oneOf(['auto']),
    PropTypes.number,
    PropTypes.shape({
      appear: PropTypes.number,
      enter: PropTypes.number,
      exit: PropTypes.number
    })
  ]),
  TransitionProps: PropTypes.object
}

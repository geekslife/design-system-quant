import React from 'react'
import PropTypes from 'prop-types'
import { ListItem as MuiListItem, isMuiElement } from '@material-ui/core'
import { chainPropTypes, elementTypeAcceptingRef } from '@material-ui/utils'

export const ListItem = (props) => {
  return <MuiListItem {...props} />
}

ListItem.propTypes = {
  alignItems: PropTypes.oneOf(['center', 'flex-start']),
  autoFocus: PropTypes.bool,
  button: PropTypes.bool,
  children: chainPropTypes(PropTypes.node, (props) => {
    const children = React.Children.toArray(props.children)
    let secondaryActionIndex = -1
    for (let i = children.length - 1; i >= 0; i -= 1) {
      const child = children[i]
      if (isMuiElement(child, ['ListItemSecondaryAction'])) {
        secondaryActionIndex = i
        break
      }
    }
    if (
      secondaryActionIndex !== -1 &&
      secondaryActionIndex !== children.length - 1
    ) {
      return new Error(
        'Design-System-Quant: You used an element after ListItemSecondaryAction. ' +
          'For ListItem to detect that it has a secondary action ' +
          'you must pass it as the last child to ListItem.'
      )
    }
    return null
  }),
  classes: PropTypes.object,
  className: PropTypes.string,
  component: PropTypes.elementType,
  ContainerComponent: elementTypeAcceptingRef,
  ContainerProps: PropTypes.object,
  dense: PropTypes.bool,
  disabled: PropTypes.bool,
  disableGutters: PropTypes.bool,
  divider: PropTypes.bool,
  focusVisibleClassName: PropTypes.string,
  selected: PropTypes.bool
}

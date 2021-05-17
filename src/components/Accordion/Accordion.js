import React from 'react'
import { Accordion as MuiAccordion } from '@material-ui/core'
import { chainPropTypes } from '@material-ui/utils'
import { isFragment } from 'react-is'
import PropTypes from 'prop-types'

export const Accordion = (props) => {
  return <MuiAccordion {...props} />
}

Accordion.propTypes = {
  children: chainPropTypes(PropTypes.node.isRequired, (props) => {
    const summary = React.Children.toArray(props.children)[0]
    if (isFragment(summary)) {
      return new Error(
        "Design-System-Quant: The Accordion doesn't accept a Fragment as a child. " +
          'Consider providing an array instead.'
      )
    }

    if (!React.isValidElement(summary)) {
      return new Error(
        'Design-System-Quant: Expected the first child of Accordion to be a valid element.'
      )
    }

    return null
  }),
  classes: PropTypes.object,
  className: PropTypes.string,
  defaultExpanded: PropTypes.bool,
  disabled: PropTypes.bool,
  expanded: PropTypes.bool,
  onChange: PropTypes.func,
  square: PropTypes.bool,
  TransitionComponent: PropTypes.elementType,
  TransitionProps: PropTypes.object
}

import React from 'react'
import PropTypes from 'prop-types'
import { AccordionSummary as MuiAccordionSummary } from '@material-ui/core'

export const AccordionSummary = (props) => {
  return <MuiAccordionSummary {...props} />
}

AccordionSummary.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  expandIcon: PropTypes.node,
  focusVisibleClassName: PropTypes.string,
  onClick: PropTypes.func
}

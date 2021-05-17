import React from 'react'
import { AccordionDetails as MuiAccordionDetails } from '@material-ui/core'
import PropTypes from 'prop-types'

export const AccordionDetails = (props) => {
  return <MuiAccordionDetails {...props} />
}

AccordionDetails.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string
}

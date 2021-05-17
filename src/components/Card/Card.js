import React from 'react'
import PropTypes from 'prop-types'
import { Card as MuiCard } from '@material-ui/core'

export const Card = (props) => {
  return <MuiCard {...props} />
}

Card.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  raised: PropTypes.bool
}

import React from 'react'
import PropTypes from 'prop-types'
import { CardActions as MuiCardActions } from '@material-ui/core'

export const CardActions = (props) => {
  return <MuiCardActions {...props} />
}

CardActions.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  disableSpacing: PropTypes.bool
}

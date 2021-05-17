import React from 'react'
import PropTypes from 'prop-types'
import { CardContent as MuiCardContent } from '@material-ui/core'

export const CardContent = (props) => {
  return <MuiCardContent {...props} />
}

CardContent.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  component: PropTypes.elementType
}

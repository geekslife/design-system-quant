import React from 'react'
import PropTypes from 'prop-types'
import { Paper as MuiPaper } from '@material-ui/core'

export const Paper = (props) => {
  const { variant = 'outlined', ...other } = props
  return <MuiPaper variant={variant} {...other} />
}
Paper.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  component: PropTypes.elementType,
  elevation: PropTypes.number,
  square: PropTypes.bool,
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(['elevation', 'outlined']),
    PropTypes.string
  ])
}

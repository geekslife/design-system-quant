import React from 'react'
import PropTypes from 'prop-types'
import { Typography as MuiTypography } from '@material-ui/core'

export const Typography = (props) => {
  const { color, ...other } = props
  return <MuiTypography color={color} {...other} />
}

Typography.propTypes = {
  align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'error',
    'inherit',
    'initial',
    'primary',
    'secondary',
    'textPrimary',
    'textSecondary'
  ]),
  component: PropTypes.elementType,
  display: PropTypes.oneOf(['block', 'initial', 'inline']),
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool,
  paragraph: PropTypes.bool,
  variant: PropTypes.oneOfType([
    PropTypes.oneOf([
      'body1',
      'body2',
      'button',
      'caption',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'inherit',
      'overline',
      'subtitle1',
      'subtitle2'
    ]),
    PropTypes.string
  ]),
  variantMapping: PropTypes.object
}

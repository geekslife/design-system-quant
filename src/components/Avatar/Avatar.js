import React from 'react'
import PropTypes from 'prop-types'
import { Avatar as MuiAvatar } from '@material-ui/core'

export const Avatar = (props) => {
  return <MuiAvatar {...props} />
}

Avatar.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  component: PropTypes.elementType,
  imgProps: PropTypes.object,
  sizes: PropTypes.string,
  src: PropTypes.string,
  srcSet: PropTypes.string,
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(['circular', 'rounded', 'square']),
    PropTypes.string
  ])
}

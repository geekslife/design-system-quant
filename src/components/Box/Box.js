import React from 'react'
import PropTypes from 'prop-types'
import { Box as MuiBox } from '@material-ui/core'

export const Box = (props) => {
  return <MuiBox {...props} />
}

Box.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  className: PropTypes.string,
  clone: PropTypes.bool,
  component: PropTypes.elementType
}

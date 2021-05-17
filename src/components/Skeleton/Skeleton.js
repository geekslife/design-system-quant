import React from 'react'
import PropTypes from 'prop-types'
import { Skeleton as MuiSkeleton } from '@material-ui/lab'

export const Skeleton = (props) => {
  return <MuiSkeleton {...props} />
}

Skeleton.propTypes = {
  animation: PropTypes.oneOf(['pulse', 'wave', false]),
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  component: PropTypes.elementType,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.object,
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(['circular', 'rectangular', 'text']),
    PropTypes.string
  ]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

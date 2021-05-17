import React from 'react'
import PropTypes from 'prop-types'
import { CircularProgress as MuiCircularProgress } from '@material-ui/core'
import { chainPropTypes } from '@material-ui/utils'

export const CircularProgress = (props) => {
  return <MuiCircularProgress {...props} />
}

CircularProgress.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary']),
  disableShrink: chainPropTypes(PropTypes.bool, (props) => {
    if (
      props.disableShrink &&
      props.variant &&
      props.variant !== 'indeterminate'
    ) {
      return new Error(
        'Design-System-Quant: You have provided the `disableShrink` prop ' +
          'with a variant other than `indeterminate`. This will have no effect.'
      )
    }

    return null
  }),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.object,
  thickness: PropTypes.number,
  value: PropTypes.number,
  variant: PropTypes.oneOf(['determinate', 'indeterminate'])
}

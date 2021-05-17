import React from 'react'
import PropTypes from 'prop-types'
import { Slider as MuiSlider } from '@material-ui/core'

export const Slider = (props) => {
  return <MuiSlider {...props} />
}

Slider.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  component: PropTypes.elementType,
  defaultValue: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number
  ]),
  disabled: PropTypes.bool,
  getAriaLabel: PropTypes.func,
  getAriaValueText: PropTypes.func,
  marks: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node,
        value: PropTypes.number.isRequired
      })
    ),
    PropTypes.bool
  ]),
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onChangeCommitted: PropTypes.func,
  onMouseDown: PropTypes.func,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  scale: PropTypes.func,
  step: PropTypes.number,
  ThumbComponent: PropTypes.elementType,
  track: PropTypes.oneOf(['inverted', 'normal', false]),
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number
  ]),
  ValueLabelComponent: PropTypes.elementType,
  valueLabelDisplay: PropTypes.oneOf(['auto', 'off', 'on']),
  valueLabelFormat: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

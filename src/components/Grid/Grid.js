import React from 'react'
import PropTypes from 'prop-types'
import { Grid as MuiGrid } from '@material-ui/core'
export const Grid = (props) => {
  return <MuiGrid {...props} />
}

Grid.propTypes = {
  alignContent: PropTypes.oneOf([
    'center',
    'flex-end',
    'flex-start',
    'space-around',
    'space-between',
    'stretch'
  ]),
  alignItems: PropTypes.oneOf([
    'baseline',
    'center',
    'flex-end',
    'flex-start',
    'stretch'
  ]),
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  component: PropTypes.elementType,
  container: PropTypes.bool,
  direction: PropTypes.oneOf([
    'column-reverse',
    'column',
    'row-reverse',
    'row'
  ]),
  item: PropTypes.bool,
  justifyContent: PropTypes.oneOf([
    'center',
    'flex-end',
    'flex-start',
    'space-around',
    'space-between',
    'space-evenly'
  ]),
  lg: PropTypes.oneOfType([
    PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    PropTypes.bool
  ]),
  md: PropTypes.oneOfType([
    PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    PropTypes.bool
  ]),
  sm: PropTypes.oneOfType([
    PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    PropTypes.bool
  ]),
  spacing: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  wrap: PropTypes.oneOf(['nowrap', 'wrap-reverse', 'wrap']),
  xl: PropTypes.oneOfType([
    PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    PropTypes.bool
  ]),
  xs: PropTypes.oneOfType([
    PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    PropTypes.bool
  ]),
  zeroMinWidth: PropTypes.bool
}

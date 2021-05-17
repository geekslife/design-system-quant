import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core'
export const ThemeProvider = (props) => {
  return <MuiThemeProvider {...props} />
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired
}

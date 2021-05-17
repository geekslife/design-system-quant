import React from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'

export const TabPanel = (props) => {
  const { children, value, index, ...other } = props
  return (
    <div hidden={value !== index} {...other}>
      {value === index && <Box>{children}</Box>}
    </div>
  )
}
TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.any.isRequired,
  index: PropTypes.any.isRequired
}

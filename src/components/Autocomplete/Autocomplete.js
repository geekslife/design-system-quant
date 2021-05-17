import React from 'react'
import PropTypes from 'prop-types'
import { Autocomplete as MuiAutocomplete } from '@material-ui/lab'

export const Autocomplete = (props) => {
  return <MuiAutocomplete {...props} />
}

Autocomplete.propTypes = {
  autoComplete: PropTypes.bool,
  autoHighlight: PropTypes.bool,
  autoSelect: PropTypes.bool,
  blurOnSelect: PropTypes.oneOfType([
    PropTypes.oneOf(['mouse', 'touch']),
    PropTypes.bool
  ]),
  ChipProps: PropTypes.object,
  classes: PropTypes.object,
  className: PropTypes.string,
  clearOnBlur: PropTypes.bool,
  clearOnEscape: PropTypes.bool,
  clearText: PropTypes.string,
  closeIcon: PropTypes.node,
  closeText: PropTypes.string,
  debug: PropTypes.bool,
  defaultValue: PropTypes.any,
  disableClearable: PropTypes.bool,
  disableCloseOnSelect: PropTypes.bool,
  disabled: PropTypes.bool,
  disabledItemsFocusable: PropTypes.bool,
  disableListWrap: PropTypes.bool,
  disablePortal: PropTypes.bool,
  filterOptions: PropTypes.func,
  filterSelectedOptions: PropTypes.bool,
  forcePopupIcon: PropTypes.oneOfType([
    PropTypes.oneOf(['auto']),
    PropTypes.bool
  ]),
  freeSolo: PropTypes.bool,
  fullWidth: PropTypes.bool,
  getLimitTagsText: PropTypes.func,
  getOptionDisabled: PropTypes.func,
  getOptionLabel: PropTypes.func,
  getOptionSelected: PropTypes.func,
  groupBy: PropTypes.func,
  handleHomeEndKeys: PropTypes.bool,
  id: PropTypes.string,
  includeInputInList: PropTypes.bool,
  inputValue: PropTypes.string,
  limitTags: PropTypes.number,
  ListboxComponent: PropTypes.elementType,
  ListboxProps: PropTypes.object,
  loading: PropTypes.bool,
  loadingText: PropTypes.node,
  multiple: PropTypes.bool,
  noOptionsText: PropTypes.node,
  onChange: PropTypes.func,
  onClose: PropTypes.func,
  onHighlightChange: PropTypes.func,
  onInputChange: PropTypes.func,
  onOpen: PropTypes.func,
  open: PropTypes.bool,
  openOnFocus: PropTypes.bool,
  openText: PropTypes.string,
  options: PropTypes.array.isRequired,
  PaperComponent: PropTypes.elementType,
  PopperComponent: PropTypes.elementType,
  popupIcon: PropTypes.node,
  renderGroup: PropTypes.func,
  renderInput: PropTypes.func.isRequired,
  renderOption: PropTypes.func,
  renderTags: PropTypes.func,
  selectOnFocus: PropTypes.bool,
  size: PropTypes.oneOf(['medium', 'small']),
  value: PropTypes.any
}

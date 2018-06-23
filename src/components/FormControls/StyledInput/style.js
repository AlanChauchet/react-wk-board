// @flow

import type { Theme } from '@material-ui/core/styles';

import red from '@material-ui/core/colors/red';

export default (theme: Theme) => ({
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  textFieldInput: {
    borderRadius: 5,
    backgroundColor: theme.palette.common.white,
    border: '2px solid #EBEDF8;',
    fontSize: 16,
    padding: [15, 20],
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
  },
  textFieldInputWithStartAdornment: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeft: 'none',
  },
  textFieldFormLabel: {
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 23,
    textTransform: 'uppercase',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
  },
  textFieldDisabled: {
    '& input': {
      backgroundColor: '#F3F4FB',
    },
  },
  textFieldError: {
    '& input, & $startAdornment': {
      borderColor: red[300],
    },
  },
  startAdornment: {
    backgroundColor: '#F3F4FB',
    border: '2px solid #EBEDF8',
    padding: '24.5px 15px',
    fontSize: 16,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    transition: theme.transitions.create(['border-color']),
    margin: 0,
    '& p': {
      color: '#B4BAC6',
    },
  },
});

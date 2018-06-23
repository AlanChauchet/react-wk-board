// @flow

import type { Theme } from '@material-ui/core/styles';
export default (theme: Theme) => ({
  container: {
    position: 'fixed',
    bottom: theme.spacing.unit * 4,
    right: theme.spacing.unit * 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  addButton: {
    borderRadius: 6,
    width: 60,
    height: 60,
    marginTop: 8,
    transition: theme.transitions.create(['background-color']),
    '& svg': {
      transition: theme.transitions.create(['transform']),
    },
  },
  addButtonOpen: {
    backgroundColor: '#B4BAC6',
    '&:hover': {
      backgroundColor: '#7c828e',
    },
    '& svg': {
      transform: 'rotate(135deg)',
    },
  },
  addButtonIcon: {
    fontSize: '2.2rem',
  },
  childButton: {
    borderRadius: 6,
    width: 42,
    height: 42,
    marginRight: 9,
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
  text: {
    textTransform: 'uppercase',
    padding: `9px 10px`,
    fontFamily: theme.typography.fontFamily,
    backgroundColor: theme.palette.common.white,
    borderRadius: 4.2,
    boxShadow: '0 2px 5px 2px rgba(0,0,0,0.1)',
    marginRight: 8,
    fontSize: 13,
    fontWeight: 600,
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: '#f7f7f7',
    },
  },
});

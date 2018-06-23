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
  addButtonIcon: {
    fontSize: '2.2rem',
  },
});

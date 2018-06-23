// @flow

import type { Theme } from '@material-ui/core/styles';

export default (theme: Theme) => ({
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0,
    ...theme.mixins.toolbar,
  },
  menuButton: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: 0,
  },
  boardName: {
    flex: 1,
    color: 'white',
    fontSize: 14,
    fontWeight: 600,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    padding: [0, theme.spacing.unit * 2],
    '&:before': {
      display: 'inline-block',
      content: '""',
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
      marginRight: theme.spacing.unit * 2,
    }
  },
  bellButton: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: 0,
    fontSize: 16,
  }
});

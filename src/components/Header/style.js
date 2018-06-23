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
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  headerLogo: {
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      '& $logo': {
        margin: [0, 12],
      },
      '& $appName': {
        width: 100,
        opacity: 1,
      },
    },
  },
  logo: {
    verticalAlign: 'top',
    height: 26,
    width: 27,
    margin: [0, 22],
    transition: theme.transitions.create('margin', { duration: '0.2s' }),
  },
  appName: {
    color: 'white',
    fontSize: 14,
    fontWeight: 500,
    textTransform: 'uppercase',
    overflow: 'hidden',
    width: 0,
    opacity: 0,
    transition: theme.transitions.create(['width', 'opacity'], {
      duration: '0.2s',
    }),
    whiteSpace: 'nowrap',
  },
  navIcon: {
    width: 27,
    height: 23,
    margin: [0, 11],
    position: 'relative',
    '&:before, &:after': {
      position: 'absolute',
      content: '""',
      display: 'block',
    },
    '&:before': {
      top: 0,
      left: 0,
      bottom: 0,
      width: '100%',
      borderTop: '3px solid #ffffff',
      borderBottom: '3px solid #ffffff',
    },
    '&:after': {
      top: '50%',
      left: 0,
      width: 'calc(100% - 6px)',
      height: 3,
      background: '#ffffff',
      marginTop: -2,
      transform: 'translateX(6px)',
    },
  },
});

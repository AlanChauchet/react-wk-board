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
      }
    }
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
    transition: theme.transitions.create(['width', 'opacity'], { duration: '0.2s' }),
    whiteSpace: 'nowrap',
  }
});

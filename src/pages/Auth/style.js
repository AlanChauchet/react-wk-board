// @flow

import type { Theme } from '@material-ui/core/styles';

export default (theme: Theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    marginTop: theme.mixins.toolbar.minHeight,
    maxHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    overflow: 'auto',
    position: 'relative',
  },
});

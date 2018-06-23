// @flow

import type { Theme } from '@material-ui/core/styles';

export default (theme: Theme) => ({
  loadingContainer: {
    width: '100%',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    marginTop: theme.mixins.toolbar.minHeight,
  }
});

// @flow

import type { Theme } from '@material-ui/core/styles';

export default (theme: Theme) => ({
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: [theme.spacing.unit * 2, theme.spacing.unit],
    borderBottom: `1px solid #f6f4f6`,
  },
  titleCount: {
    marginLeft: 16,
    backgroundColor: '#e1e7ee',
    padding: [0, 11],
    borderRadius: '40%',
  },
  collapseContainer: {
    marginLeft: 'auto',
    fontSize: 12,
    color: '#e2e0e3'
  }
});

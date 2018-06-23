// @flow

import type { Theme } from '@material-ui/core/styles';

export default (theme: Theme) => ({
  cardContainer: {
    padding: 10,
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: theme.palette.text.secondary,
  },
  cardTitle: {
    color: '#354052',
    textTransform: 'capitalize',
    fontSize: '1rem',
  },
});

// @flow

import type { Theme } from '@material-ui/core/styles';

export default (theme: Theme) => ({
  cardContainer: {
    overflow: 'hidden',
  },
  head: {
    padding: theme.spacing.unit,
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    margin: {
      top: theme.spacing.unit,
      bottom: theme.spacing.unit,
      right: theme.spacing.unit * 2,
    },
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
    marginBottom: theme.spacing.unit,
  },
  description: {
    color: theme.palette.text.secondary,
    fontSize: 13,
    fontStyle: 'italic',
  },
  bellButton: {
    fontSize: 14,
    color: theme.palette.text.secondary,
    transform: 'translateY(-12px)',
    marginLeft: 'auto',
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing.unit,
    '& > *:not(:last-of-type)': {
      marginRight: theme.spacing.unit * 2,
    },
  },
  rate: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: 16,
    fontWeight: 600,
    padding: [0, theme.spacing.unit],
    borderRadius: 12,
  },
  infoCount: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    '& svg': {
      marginRight: theme.spacing.unit / 2,
    },
  },
  createdSince: {
    marginLeft: 'auto',
    fontStyle: 'italic',
    opacity: 0.7,
  },
});

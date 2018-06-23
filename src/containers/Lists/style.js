// @flow

import type { Theme } from '@material-ui/core/styles';

const LANE_WIDTH = 400;

export default (theme: Theme) => ({
  loadingContainer: {
    width: '100%',
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: theme.spacing.unit * 6,
  },
  board: {
    marginLeft: theme.spacing.unit * -3,
    marginRight: theme.spacing.unit * -3,
    background: 'transparent',
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  lane: {
    backgroundColor: '#fdfbfd',
    boxShadow: '0 0 10px 0 #D2D7E0',
    marginRight: theme.spacing.unit * 2,
    padding: 0,
    minWidth: LANE_WIDTH,
  },
  laneDraggableZone: {
    minWidth: LANE_WIDTH,
  },
  card: {
    border: 'none',
    borderRadius: 5,
    boxShadow: theme.shadows[1],
    minWidth: LANE_WIDTH - theme.spacing.unit * 2,
  },
});

// @flow

import red from '@material-ui/core/colors/red';
import { COLOR_GREY_LIGHT, COLOR_RED_LIGHT } from '../../../constants/colors';

import type { Theme } from '@material-ui/core/styles';
export default (theme: Theme) => ({
  choice: {
    padding: [theme.spacing.unit * 2, theme.spacing.unit * 3.75],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 140,
    color: '#5C6B7E',
    backgroundColor: COLOR_GREY_LIGHT,
    borderRadius: 4,
    width: '100%',
    border: '2px solid transparent',
    transition: theme.transitions.create([
      'color',
      'background-color',
      'border-color',
    ]),
    '&.selected': {
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      backgroundColor: 'rgba(51, 169, 253, 0.18)',
      '&.error': {
        borderColor: red[300],
        color: red[300],
        backgroundColor: COLOR_RED_LIGHT,
      },
    },
    '&.small': {
      minHeight: 53,
      padding: [0, theme.spacing.unit * 1.5],
      borderRadius: 3,
      justifyContent: 'flex-start',
      '&:not(.withLabel)': {
        marginTop: 24,
      },
      '& svg': {
        opacity: 0,
        fontSize: 14,
        marginRight: theme.spacing.unit,
        transition: theme.transitions.create('opacity'),
      },
      '&.selected': {
        '& svg': {
          opacity: 1,
        },
      },
    },
  },
  choiceText: {
    fontSize: 18,
    fontWeight: 600,
  },
});

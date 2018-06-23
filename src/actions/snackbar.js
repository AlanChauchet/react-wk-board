// @flow

import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    show: ['payload'],
  },
  {
    prefix: 'SNACKBAR.',
  }
);

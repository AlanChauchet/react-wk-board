// @flow

import { createReducer } from 'reduxsauce';

import type { Action, SnackbarState } from '../types/Redux';
import { Types } from '../actions/snackbar';

export const INITIAL_STATE: SnackbarState = {
  horizontal: 'center',
  vertical: 'bottom',
  closable: true,
  duration: 3000,
  message: null,
  color: null,
  backgroundColor: null,
};

export const setMessage = (state = INITIAL_STATE, action: Action) => {
  return {
    ...INITIAL_STATE,
    ...action.payload,
  };
};

export const HANDLERS = {
  [Types.SHOW]: setMessage,
};

export default createReducer(INITIAL_STATE, HANDLERS);

// @flow

import React from 'react';
import { Field } from 'redux-form';

import ManagedCheckbox from './ManagedCheckbox';

export const ReduxFormCheckbox = (props) => {
  return <Field component={ManagedCheckbox} {...props} />;
};

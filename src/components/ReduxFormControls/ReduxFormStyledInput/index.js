// @flow

import React from 'react';
import { Field } from 'redux-form';

import ManagedStyledInput from './ManagedStyledInput';

export const ReduxFormStyledInput = (props: any) => {
  return <Field component={ManagedStyledInput} {...props} />;
};

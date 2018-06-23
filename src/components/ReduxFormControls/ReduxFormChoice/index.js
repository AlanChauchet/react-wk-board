// @flow

import React from 'react';
import { Field } from 'redux-form';

import ManagedChoice from './ManagedChoice';

export const ReduxFormChoice = (props: any) => {
  return <Field component={ManagedChoice} {...props} />;
};

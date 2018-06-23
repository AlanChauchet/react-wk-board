// @flow

import React from 'react';
import { Field } from 'redux-form';

import ManagedStyledInput from './ManagedStyledInput';
import ManagedStyledAddressInput from './ManagedStyledAddressInput';

export const ReduxFormStyledInput = ({ address, ...otherProps }: any) => {
  return (
    <Field
      component={address ? ManagedStyledAddressInput : ManagedStyledInput}
      {...otherProps}
    />
  );
};

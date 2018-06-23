// @flow

import React from 'react';

import { StyledInput } from '../../FormControls/StyledInput/index';

const ManagedStyledInput = ({ input, meta: { touched, error }, ...custom }) => (
  <StyledInput
    error={touched && !!error}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

export default ManagedStyledInput;

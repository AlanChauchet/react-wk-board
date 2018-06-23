// @flow

import React from 'react';

import { StyledAddressInput } from '../../FormControls/StyledAddressInput/index';

const ManagedStyledAddressInput = ({
  input,
  meta: { touched, error },
  ...custom
}: any) => (
  <StyledAddressInput
    error={touched && !!error}
    helperText={touched && error}
    {...custom}
    inputProps={{
      ...input,
      placeholder: custom.placeholder || null,
      required: custom.required || false,
      ...(custom.inputProps || {}),
    }}
  />
);

export default ManagedStyledAddressInput;

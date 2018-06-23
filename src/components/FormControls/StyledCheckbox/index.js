// @flow

import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

import styles from './style';

export const StyledCheckbox = withStyles(styles)(
  ({ label, error, classes, checked, ...custom }) => (
    <FormControlLabel
      control={
        <Checkbox {...custom} checked={checked} color="primary" value="true" />
      }
      className={classes.container}
      label={label}
      error={error}
    />
  )
);

// @flow

import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

import styles from './style';

const ManagedCheckbox = withStyles(styles)(
  ({ input, meta: { touched, error }, classes, ...custom }) => (
    <FormControlLabel
      control={
        <Checkbox
          color="primary"
          {...input}
          checked={input.value}
          value="true"
        />
      }
      className={classes.container}
      {...custom}
    />
  )
);

export default ManagedCheckbox;

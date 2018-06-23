// @flow

import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import isNil from 'lodash/isNil';

import styles from './style';
import { ButtonWithLoader } from '../ButtonWithLoader';
import { ReduxFormStyledInput } from '../ReduxFormControls/ReduxFormStyledInput';

type Props = {
  classes: any,
  open: boolean,
  handleClose: Function,
};

class AddFormModal extends PureComponent<Props> {
  render() {
    const { open, handleClose, handleSubmit, submitting } = this.props;

    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">Add a new item</DialogTitle>
          <DialogContent>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <ReduxFormStyledInput name="avatar" label="Avatar (url)" />
              </Grid>
              <Grid item xs={12}>
                <ReduxFormStyledInput name="name" label="Name" />
              </Grid>
              <Grid item xs={12}>
                <ReduxFormStyledInput name="description" label="Description" />
              </Grid>
              <Grid item xs={12}>
                <ReduxFormStyledInput
                  name="rate"
                  label="Rate (0 to 5)"
                  inputProps={{
                    type: 'number',
                    min: 0,
                    max: 5,
                  }}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" type="button">
              Cancel
            </Button>
            <ButtonWithLoader
              type="submit"
              loading={submitting}
              color="primary"
            >
              Add
            </ButtonWithLoader>
          </DialogActions>
        </form>
      </Dialog>
    );
  }
}

const requiredFields = ['avatar', 'name', 'description', 'rate'];

const validate = (values) => {
  const errors = {};
  for (const field of requiredFields) {
    if (isNil(values[field])) {
      errors[field] = 'This field is required';
    }
  }
  if (!errors.rate && (+values.rate < 0 || +values.rate > 5)) {
    errors.rate = 'Rate should be a number between 0 and 5';
  }
  return errors;
};

export default compose(
  withStyles(styles),
  reduxForm({
    form: 'addItem',
    validate,
  })
)(AddFormModal);

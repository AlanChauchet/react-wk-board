// @flow

import React, { PureComponent } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import { cx } from 'emotion';
import omit from 'lodash/omit';

import styles from './style';

class _StyledInput extends PureComponent<any> {
  render() {
    const { classes, startAdornment } = this.props;

    const otherProps = omit(this.props, [
      'theme',
      'classes',
      'InputProps',
      'InputLabelProps',
      'startAdornment',
      'onKeyPress',
      'onEnter',
    ]);

    return (
      <TextField
        fullWidth
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.textFieldRoot,
            input: cx(
              classes.textFieldInput,
              startAdornment && classes.textFieldInputWithStartAdornment
            ),
            disabled: classes.textFieldDisabled,
            error: classes.textFieldError,
          },
          startAdornment: startAdornment && (
            <InputAdornment
              position="start"
              classes={{
                root: classes.startAdornment,
              }}
            >
              {startAdornment}
            </InputAdornment>
          ),
          ...(this.props.InputProps || {}),
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.textFieldFormLabel,
          ...(this.props.InputLabelProps || {}),
        }}
        onKeyPress={(ev) => {
          if (this.props.onEnter && ev.key === 'Enter') {
            ev.preventDefault();
            this.props.onEnter();
          }
          this.props.onKeyPress && this.props.onKeyPress(ev);
        }}
        {...otherProps}
      />
    );
  }
}

export const StyledInput = withStyles(styles)(_StyledInput);

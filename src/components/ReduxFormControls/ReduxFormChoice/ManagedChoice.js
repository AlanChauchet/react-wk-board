// @flow

import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './style';
import Choice from '../../FormControls/Choice';

export default withStyles(styles)(
  ({
    input,
    meta: { touched, error },
    classes,
    choices,
    multiple,
    containerProps,
    ...custom
  }) => {
    const select = (choiceValue) => {
      if (!multiple) {
        return input.onChange(choiceValue);
      }
      if (input.value) {
        const index = input.value.indexOf(choiceValue);
        if (index >= 0) {
          return input.onChange([
            ...input.value.slice(0, index),
            ...input.value.slice(index + 1),
          ]);
        }
        return input.onChange([...input.value, choiceValue]);
      }
      return input.onChange([choiceValue]);
    };
    return (
      !!choices &&
      choices.map((choice) => {
        const selected = multiple
          ? !!input.value && input.value.indexOf(choice.value) >= 0
          : choice.value === input.value;
        return (
          <Grid
            item
            xs={12}
            md={6}
            key={`choice-${choice.value}`}
            {...containerProps}
          >
            <Choice
              selected={selected}
              error={error}
              onClick={() => select(choice.value)}
              {...custom}
            >
              {choice.text}
            </Choice>
          </Grid>
        );
      })
    );
  }
);

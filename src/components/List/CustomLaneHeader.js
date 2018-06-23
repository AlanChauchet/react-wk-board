// @flow

import React from 'react';
import { Typography } from 'material-ui';

export const CustomLaneHeader = (props) => {
  const { title, classes, nbResults } = props;

  return (
    <div className={classes.titleContainer}>
      <Typography variant="subheading">{title}</Typography>
      <Typography
        className={classes.titleCount}
        color="textSecondary"
        variant="subheading"
      >
        ({nbResults})
      </Typography>
    </div>
  );
};

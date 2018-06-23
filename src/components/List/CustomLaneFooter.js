// @flow

import React from 'react';
import { Typography } from 'material-ui';

export const CustomLaneFooter = (props) => {
  const { classes, totalEstimatedWealth } = props;

  return (
    <div className={classes.footerContainer}>
      <Typography variant="subheading" color="secondary">
        {totalEstimatedWealth}€
      </Typography>
      <Typography className="text" color="secondary">
        Valeur totale
      </Typography>
    </div>
  );
};

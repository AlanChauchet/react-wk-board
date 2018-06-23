// @flow

import React from 'react';
import { Typography } from 'material-ui';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';

import { Interest } from '../../../components/Interest';
import { getEstimatedWealthText } from '../../../utils/estimated-wealth';

export const CustomCard = (props) => {
  const { classes, title, estimatedWealth, interest, email } = props;

  return (
    <div className={classes.cardContainer}>
      <Interest
        reverse
        interest={interest}
        className={classes.interestContainer}
      />
      <div className={classes.cardContent}>
        <div>
          <Typography className={classes.cardTitle}>
            {title || email}
          </Typography>
          <Typography
            color="textSecondary"
            className={classes.cardEstimatedWealth}
          >
            Valeur estimée: {getEstimatedWealthText(estimatedWealth)}
          </Typography>
        </div>
        <ChevronRightIcon />
      </div>
    </div>
  );
};

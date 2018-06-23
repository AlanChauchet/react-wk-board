// @flow

import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './style';

export default withStyles(styles)((props) => {
  const { classes, item } = props;

  return (
    <div className={classes.cardContainer}>
      <div className={classes.cardContent}>
        <div>
          <Typography className={classes.cardTitle}>
            {item.name}
          </Typography>
        </div>
      </div>
    </div>
  );
});

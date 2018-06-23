// @flow

import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './style';

export default withStyles(styles)((props) => {
  const { title, classes, nbResults } = props;

  return (
    <div className={classes.titleContainer}>
      <Typography variant="subheading">{title}</Typography>
      <Typography
        className={classes.titleCount}
        variant="subheading"
        component="div"
      >
        {nbResults}
      </Typography>
      <div className={classes.collapseContainer}>
        <i className="fal fa-chevron-down"/>
      </div>
    </div>
  );
});

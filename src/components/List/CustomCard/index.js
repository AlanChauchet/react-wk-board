// @flow

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import distanceInWords from 'date-fns/distance_in_words';

import styles from './style';

export default withStyles(styles)((props) => {
  const { classes, item, onBellTapped } = props;

  const createdSince = item.createdAt
    ? distanceInWords(new Date(), new Date(item.createdAt.seconds * 1000), {
        addSuffix: true,
      })
    : null;

  return (
    <div className={classes.cardContainer}>
      <div className={classes.head}>
        <Avatar src={item.avatar} alt={item.name} className={classes.avatar} />
        <div>
          <Typography className={classes.title}>{item.name}</Typography>
          <Typography className={classes.description}>
            {item.description}
          </Typography>
        </div>
        <IconButton
          component="div"
          className={classes.bellButton}
          onClick={onBellTapped}
          key={`bell-${item.notificationsEnabled}`}
        >
          <i
            className={`fas fa-bell${
              item.notificationsEnabled ? '' : '-slash'
            }`}
          />
        </IconButton>
      </div>
      <Divider />
      <div className={classes.info}>
        <Typography className={classes.rate}>{item.rate}</Typography>
        <Typography className={classes.infoCount}>
          <i className="fas fa-thumbs-up" />
          {item.nbLikes}
        </Typography>
        <Typography className={classes.infoCount}>
          <i className="fas fa-comment-alt" />
          {item.nbMessages}
        </Typography>
        <Typography className={classes.infoCount}>
          <i className="fas fa-envelope" />
          {item.nbEmails}
        </Typography>
        <Typography className={classes.createdSince} color="textSecondary">
          {createdSince}
        </Typography>
      </div>
    </div>
  );
});

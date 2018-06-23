// @flow

import React, { PureComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import styles from './style';
import type { Board } from '../../types/Board';

type Props = {
  classes: any,
  board: Board,
};

class BoardHeader extends PureComponent<Props> {
  render() {
    const { classes, board } = this.props;

    return (
      <AppBar
        className={classes.appBar}
        color="secondary"
      >
        <Toolbar className={classes.toolbar}>
          <IconButton className={classes.menuButton}>
            <i className="far fa-bars"/>
          </IconButton>
          <Typography className={classes.boardName}>
            {board.name}
          </Typography>
          <IconButton className={classes.bellButton}>
            <i className="fas fa-bell"/>
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(BoardHeader);

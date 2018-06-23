// @flow

import React, { PureComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import styles from './style';
import Logo from '../../assets/svg/logo.svg';

type Props = {
  classes: any,
};

class Header extends PureComponent<Props> {
  render() {
    const { classes } = this.props;

    return (
      <AppBar
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.headerLogo}>
            <img src={Logo} alt="WK" className={classes.logo}/>
            <Typography className={classes.appName}>
              Welcome Kit
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);

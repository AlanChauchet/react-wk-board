// @flow

import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Header from '../../components/Header';
import styles from './style';

type Props = {
  children: any,
};

class Auth extends PureComponent<Props> {
  render() {
    const { classes, children } = this.props;

    return (
      <div className={classes.root}>
        <Header />
        <main className={classes.content}>{children}</main>
      </div>
    );
  }
}

export default withStyles(styles)(Auth);

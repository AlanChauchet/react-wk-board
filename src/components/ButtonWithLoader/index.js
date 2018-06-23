// @flow

import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import omit from 'lodash/omit';

import styles from './style';

type Props = {
  classes: any,
  loading?: boolean,
};

class _ButtonWithLoader extends PureComponent<Props> {
  static defaultProps = {
    loading: false,
  };

  render() {
    const { classes } = this.props;

    const cleanProps = omit(this.props, ['classes', 'loading']);

    return (
      <div className={classes.wrapper}>
        <Button
          {...cleanProps}
          disabled={this.props.disabled || this.props.loading}
        >
          {!this.props.loading && this.props.children}
        </Button>
        {this.props.loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
    );
  }
}

export const ButtonWithLoader = withStyles(styles)(_ButtonWithLoader);

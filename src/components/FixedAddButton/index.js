// @flow

import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

import styles from './style';

type Props = {
  classes: any,
};

class FixedAddButton extends PureComponent<Props> {
  render() {
    const { classes, ...otherProps } = this.props;

    return (
      <div className={classes.container}>
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          className={classes.addButton}
          {...otherProps}
        >
          <AddIcon className={classes.addButtonIcon} />
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(FixedAddButton);

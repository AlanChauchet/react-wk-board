// @flow

import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

import { Transition } from 'react-transition-group';
import { Link } from '@reach/router';
import { cx } from 'emotion';
import ClickOutside from 'react-click-outside';

import styles from './style';

type Props = {
  classes: any,
};

type State = {
  open: boolean,
};

const duration = 200;

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  opacity: 0,
  transform: 'translateY(15rem)',
};

const transitionStyles = {
  entering: { opacity: 0, transform: 'translateY(15rem)' },
  entered: { opacity: 1, transform: 'translateY(0)' },
};

class _FixedAddButton extends PureComponent<Props, State> {
  state = {
    open: false,
  };

  switchOpen = () => {
    this.setState((state: State) => ({ open: !state.open }));
  };

  close = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <ClickOutside className={classes.container} onClickOutside={this.close}>
        <Transition in={open} timeout={duration}>
          {(state) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <div className={classes.item}>
                <Paper
                  className={classes.text}
                  component={Link}
                  to="/prospects/import"
                >
                  Importer des prospects
                </Paper>
                <Button
                  variant="fab"
                  color="secondary"
                  aria-label="import lead"
                  className={classes.childButton}
                  component={Link}
                  to="/prospects/import"
                >
                  <i className="fas fa-file-excel" />
                </Button>
              </div>
              <div className={classes.item}>
                <Paper
                  className={classes.text}
                  component={Link}
                  to="/prospects/add"
                >
                  Ajouter un prospect
                </Paper>
                <Button
                  variant="fab"
                  color="secondary"
                  aria-label="add lead"
                  className={classes.childButton}
                  component={Link}
                  to="/prospects/add"
                >
                  <i className="fas fa-user-alt" />
                </Button>
              </div>
            </div>
          )}
        </Transition>
        <Button
          variant="fab"
          color="secondary"
          aria-label="add"
          className={cx(classes.addButton, open && classes.addButtonOpen)}
          onClick={this.switchOpen}
        >
          <AddIcon className={classes.addButtonIcon} />
        </Button>
      </ClickOutside>
    );
  }
}

export const FixedAddButton = withStyles(styles)(_FixedAddButton);

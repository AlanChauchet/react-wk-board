// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import MaterialSnackbar from '@material-ui/core/Snackbar';
import { withTheme } from '@material-ui/core/styles';

import { Creators as SnackbarCreators } from '../actions/snackbar';
import type { Dispatch, ReduxState } from '../types/Redux';

type Props = {
  snackbar: any,
};

type State = {
  open: boolean,
  theme: any,
};

class _Snackbar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      open: !!this.props.snackbar.message,
    };
  }

  handleClose = () => {
    this.setState({ open: false }, this.props.resetMessage);
  };

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (prevState.open !== !!nextProps.snackbar.message) {
      return {
        open: !!nextProps.snackbar.message,
      };
    }
    return null;
  }

  render() {
    const {
      horizontal,
      vertical,
      closable,
      duration,
      message,
      color,
      backgroundColor,
    } = this.props.snackbar;
    const { theme } = this.props;
    const { open } = this.state;

    return (
      <MaterialSnackbar
        anchorOrigin={{
          vertical,
          horizontal,
        }}
        open={open}
        autoHideDuration={duration}
        onClose={this.handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
          style: {
            color,
            backgroundColor: backgroundColor || theme.palette.secondary.main,
          },
        }}
        message={<span id="message-id">{message}</span>}
        action={
          closable && [
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]
        }
      />
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({
  snackbar: state.snackbar,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  resetMessage: () => dispatch(SnackbarCreators.show({ message: null })),
});

export const Snackbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme()(_Snackbar));

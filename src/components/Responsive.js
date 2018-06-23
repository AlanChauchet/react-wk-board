// @flow

// @flow

import React, { PureComponent } from 'react';
import withTheme from '@material-ui/core/styles/withTheme';
import Responsive from 'react-responsive';

type Props = {
  theme: any,
  breakpoint:
    | 'xs'
    | 'sm'
    | 'smDown'
    | 'smUp'
    | 'md'
    | 'mdDown'
    | 'mdUp'
    | 'lg'
    | 'lgDown'
    | 'lgUp',
};

class MyComponent extends PureComponent<Props> {
  getSize = (
    theme: any,
    breakpoint:
      | 'xs'
      | 'sm'
      | 'smDown'
      | 'smUp'
      | 'md'
      | 'mdDown'
      | 'mdUp'
      | 'lg'
      | 'lgDown'
      | 'lgUp'
  ) => {
    switch (breakpoint) {
      case 'xs': {
        return {
          minWidth: theme.breakpoints.values.xs,
          maxWidth: theme.breakpoints.values.sm - 1,
        };
      }
      case 'sm': {
        return {
          minWidth: theme.breakpoints.values.sm,
          maxWidth: theme.breakpoints.values.md - 1,
        };
      }
      case 'smDown': {
        return {
          minWidth: undefined,
          maxWidth: theme.breakpoints.values.md - 1,
        };
      }
      case 'smUp': {
        return {
          minWidth: theme.breakpoints.values.sm,
          maxWidth: undefined,
        };
      }
      case 'md': {
        return {
          minWidth: theme.breakpoints.values.md,
          maxWidth: theme.breakpoints.values.lg - 1,
        };
      }
      case 'mdDown': {
        return {
          minWidth: undefined,
          maxWidth: theme.breakpoints.values.lg - 1,
        };
      }
      case 'mdUp': {
        return {
          minWidth: theme.breakpoints.values.md,
          maxWidth: undefined,
        };
      }
      case 'lg': {
        return {
          minWidth: theme.breakpoints.values.lg,
          maxWidth: theme.breakpoints.values.xl - 1,
        };
      }
      case 'lgDown': {
        return {
          minWidth: undefined,
          maxWidth: theme.breakpoints.values.xl - 1,
        };
      }
      case 'lgUp': {
        return {
          minWidth: theme.breakpoints.values.lg,
          maxWidth: undefined,
        };
      }
      default:
        return {
          minWidth: undefined,
          maxWidth: undefined,
        };
    }
  };

  render() {
    const { theme, breakpoint, ...otherProps } = this.props;

    const { minWidth, maxWidth } = this.getSize(theme, breakpoint);

    return (
      <Responsive {...otherProps} minWidth={minWidth} maxWidth={maxWidth} />
    );
  }
}

export default withTheme()(MyComponent);

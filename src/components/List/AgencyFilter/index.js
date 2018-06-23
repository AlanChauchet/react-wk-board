// @flow

import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui';

import styles from './style';
import { AgencySelect } from '../../../AgencySelect';

type Props = {
  classes: any,
  onChange: Function,
  value: ?any,
};

class _AgencyFilter extends PureComponent<Props> {
  render() {
    const { classes, value, onChange } = this.props;

    return (
      <AgencySelect
        id="agencyId"
        name="agencyId"
        placeholder="Agence"
        className={classes.select}
        value={value}
        onChange={onChange}
      />
    );
  }
}

export const AgencyFilter = withStyles(styles, { withTheme: true })(
  _AgencyFilter
);

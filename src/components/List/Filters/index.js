// @flow

import React, { PureComponent } from 'react';
import {
  Button,
  Drawer,
  Grid,
  IconButton,
  Typography,
  withStyles,
} from 'material-ui';
import CloseIcon from 'material-ui-icons/Close';
import moment from 'moment';

import styles from './style';
import type { ClientFilters, ClientInterest } from '../../../../types/Client';
import { Interest } from '../../../../components/Interest';
import { SliderRange } from '../../../SliderRange';
import { getEstimatedWealthText } from '../../../../utils/estimated-wealth';
import { StyledCheckbox } from '../../../StyledCheckbox';
import { StyledCalendar } from '../../../StyledCalendar';

type Props = {
  open: boolean,
  filters: ClientFilters,
  onChange: (filters: ClientFilters) => any,
  onHideFilters: Function,
  onResetFilters: Function,
};

type State = {
  filters: ClientFilters,
  lastFilters: ClientFilters,
  userId: number,
  allowUserFilter: boolean,
  date: any,
};

class _LeadsListFilters extends PureComponent<Props> {
  state = {
    filters: {},
    lastFilters: null,
    date: moment(),
  };

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (prevState.lastFilters !== nextProps.filters) {
      return {
        filters: {
          ...nextProps.filters,
          userId: nextProps.filters.userId ? +nextProps.filters.userId : null,
        },
        lastFilters: nextProps.filters,
      };
    }
    return null;
  }

  reset = () => {
    this.setState(
      {
        filters: this.props.filters,
      },
      this.props.onHideFilters
    );
  };

  switchState = (clientInterest: ClientInterest) => {
    if (
      this.state.filters.interests &&
      this.state.filters.interests.includes(clientInterest)
    ) {
      this.removeInterest(clientInterest);
    } else {
      this.addInterest(clientInterest);
    }
  };

  addInterest = (clientInterest: ClientInterest) => {
    this.setState((state: State) => ({
      filters: {
        ...state.filters,
        interests: state.filters.interests
          ? [...state.filters.interests, clientInterest]
          : [clientInterest],
      },
    }));
  };

  removeInterest = (clientInterest: ClientInterest) => {
    this.setState((state: State) => ({
      filters: {
        ...state.filters,
        interests:
          state.filters.interests.length > 1
            ? [
                ...state.filters.interests.slice(
                  0,
                  state.filters.interests.indexOf(clientInterest)
                ),
                ...state.filters.interests.slice(
                  state.filters.interests.indexOf(clientInterest) + 1
                ),
              ]
            : null,
      },
    }));
  };

  changeEstimatedWealth = ({ min, max }) => {
    if (min < 0 || max > 400000) {
      return;
    }
    this.setState((state: State) => ({
      filters: {
        ...state.filters,
        estimatedWealthMin: min,
        estimatedWealthMax: max === 400000 ? null : max,
      },
    }));
  };

  changeContactCount = ({ min, max }) => {
    if (min < 0 || max > 20) {
      return;
    }
    this.setState((state: State) => ({
      filters: {
        ...state.filters,
        contactCountMin: min,
        contactCountMax: max === 20 ? null : max,
      },
    }));
  };

  changeDateSelected = (date: any) => {
    return this.setState((state: State) => ({
      filters: {
        ...state.filters,
        dateStart: date.start,
        dateEnd: date.end,
      },
    }));
  };

  changeUserIdFilter = (ev) => {
    const checked = ev.target.checked;
    this.setState((state: State) => ({
      filters: {
        ...state.filters,
        userId: checked ? this.props.userId : null,
      },
    }));
  };

  callChange = () => this.props.onChange(this.state.filters);

  renderEstimatedWealthLabel = (value: number) => (
    <Typography color="textSecondary">
      {getEstimatedWealthText(value)}
    </Typography>
  );

  renderContactCountLabel = (value: number) => (
    <Typography color="textSecondary">
      {value === 20 ? '20+' : value}
    </Typography>
  );

  render() {
    const {
      classes,
      open,
      onHideFilters,
      onResetFilters,
      userId,
      allowUserFilter,
    } = this.props;
    const { filters } = this.state;

    return (
      <Drawer
        classes={{
          paper: classes.filtersDrawer,
        }}
        ModalProps={{
          hideBackdrop: false,
          BackdropProps: {
            invisible: true,
          },
        }}
        anchor="right"
        open={open}
        onClose={onHideFilters}
      >
        <Grid container>
          <Grid item xs={12} className={classes.filtersHeader}>
            <Typography variant="subheading">Filtres</Typography>
            <IconButton onClick={onHideFilters} className={classes.closeButton}>
              <CloseIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} className={classes.filterContainer}>
            <StyledCalendar
              value={{
                start: filters.dateStart,
                end: filters.dateEnd,
              }}
              range
              onChange={this.changeDateSelected}
            />
          </Grid>
          <Grid item xs={12} className={classes.filterContainer}>
            <Typography className={classes.filterTitle}>
              Statut du prospect
            </Typography>
            <div className={classes.interestsContainer}>
              <Interest
                onClick={() => this.switchState('high')}
                className={classes.interest}
                reverse={
                  !filters.interests || !filters.interests.includes('high')
                }
                interest="high"
              />
              <Interest
                onClick={() => this.switchState('medium')}
                className={classes.interest}
                reverse={
                  !filters.interests || !filters.interests.includes('medium')
                }
                interest="medium"
              />
              <Interest
                onClick={() => this.switchState('low')}
                className={classes.interest}
                reverse={
                  !filters.interests || !filters.interests.includes('low')
                }
                interest="low"
              />
            </div>
          </Grid>
          <Grid item xs={12} className={classes.filterContainer}>
            <Typography className={classes.filterTitle}>
              Valeur de l'encours
            </Typography>
            <div className={classes.sliderContainer}>
              <SliderRange
                value={{
                  min: filters.estimatedWealthMin
                    ? +filters.estimatedWealthMin
                    : 0,
                  max: filters.estimatedWealthMax
                    ? +filters.estimatedWealthMax
                    : 400000,
                }}
                minValue={0}
                maxValue={400000}
                step={1000}
                multiple
                valueLabel={false}
                onChange={this.changeEstimatedWealth}
              />
              <div className={classes.sliderLabels}>
                {this.renderEstimatedWealthLabel(
                  filters.estimatedWealthMin || 0
                )}
                {this.renderEstimatedWealthLabel(
                  filters.estimatedWealthMax || 400000
                )}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} className={classes.filterContainer}>
            <Typography className={classes.filterTitle}>
              Nombre de contacts
            </Typography>
            <div className={classes.sliderContainer}>
              <SliderRange
                value={{
                  min: filters.contactCountMin ? +filters.contactCountMin : 0,
                  max: filters.contactCountMax ? +filters.contactCountMax : 20,
                }}
                minValue={0}
                maxValue={20}
                step={1}
                multiple
                valueLabel={false}
                onChange={this.changeContactCount}
              />
              <div className={classes.sliderLabels}>
                {this.renderContactCountLabel(filters.contactCountMin || 0)}
                {this.renderContactCountLabel(filters.contactCountMax || '20+')}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} className={classes.filterContainer}>
            {allowUserFilter && (
              <StyledCheckbox
                label="Uniquement mes clients"
                checked={filters.userId === userId}
                onChange={this.changeUserIdFilter}
              />
            )}
          </Grid>
          <Grid item xs={12} className={classes.buttonsContainer}>
            <Button variant="raised" color="primary" onClick={this.callChange}>
              Filtrer les résultats
            </Button>
            <Button className={classes.secondaryButton} onClick={this.reset}>
              ANNULER
            </Button>
            <Button
              className={classes.secondaryButton}
              onClick={onResetFilters}
            >
              RÉINITIALISER
            </Button>
          </Grid>
        </Grid>
      </Drawer>
    );
  }
}

export const LeadsListFilters = withStyles(styles, { withTheme: true })(
  _LeadsListFilters
);

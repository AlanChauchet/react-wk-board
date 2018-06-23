// @flow

const filtersDrawerWidth = 370;

export default (theme) => ({
  filtersDrawer: {
    width: filtersDrawerWidth,
    maxWidth: '100%',
    marginTop: theme.mixins.toolbar.minHeight,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.mixins.toolbar[theme.breakpoints.up('sm')].minHeight,
    },
  },
  filtersHeader: {
    padding: theme.spacing.unit * 2,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeButton: {
    color: theme.palette.text.secondary,
  },
  filterContainer: {
    padding: theme.spacing.unit * 2,
  },
  filterTitle: {
    fontSize: 13,
    fontWeight: 500,
    color: '#8A96A0',
    textTransform: 'uppercase',
  },
  calendarHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  calendarHeaderControls: {
    display: 'flex',
    alignItems: 'center',
  },
  calendarHeaderDate: {
    fontWeight: 500,
    textTransform: 'capitalize',
  },
  calendarHeaderControl: {
    color: '#EBEDF8',
    fontSize: 18,
  },
  calendarHeaderWeekDays: {
    display: 'flex',
    width: '100%',
    marginBottom: theme.spacing.unit * 1.5,
  },
  calendarHeaderWeekDay: {
    padding: theme.spacing.unit,
    color: theme.palette.text.secondary,
    fontFamily: theme.typography.fontFamily,
    fontSize: 14,
    flex: '0 14.28571%',
    textAlign: 'center',
  },
  calendar: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  calendarDay: {
    flex: '0 14.28571%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    color: '#8A96A0',
    marginTop: 1,
    '&.prevMonth': {
      color: '#EBEDF8',
    },
    '&.nextMonth': {
      color: '#EBEDF8',
    },
    '&:hover .day': {
      borderRadius: '100%',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      boxShadow: theme.shadows[5],
    },
    '&.selected .day': {
      borderRadius: '100%',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      boxShadow: theme.shadows[5],
    },
    '&.between': {
      backgroundColor: 'rgba(51,169,253,0.12)',
      color: theme.palette.primary.main,
    },
    '&.selected.dateStart': {
      backgroundImage:
        'linear-gradient(left, transparent 20px,rgba(51,169,253,0.12) 40px, rgba(51,169,253,0.12) 100%)',
    },
    '&.selected.dateEnd': {
      backgroundImage:
        'linear-gradient(right, transparent 20px,rgba(51,169,253,0.12) 40px, rgba(51,169,253,0.12) 100%)',
    },
    '&.between.firstDayOfWeek': {
      borderTopLeftRadius: 7,
      borderBottomLeftRadius: 7,
    },
    '&.between.lastDayOfWeek': {
      borderTopRightRadius: 7,
      borderBottomRightRadius: 7,
    },
  },
  calendarDayText: {
    color: 'inherit',
    textAlign: 'center',
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 10,
    cursor: 'pointer',
    transition: theme.transitions.create(['backgroundColor', 'color']),
  },
  interestsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  interest: {
    marginTop: theme.spacing.unit,
    cursor: 'pointer',
    '&:not(:last-of-type)': {
      marginRight: theme.spacing.unit,
    },
  },
  sliderContainer: {
    marginTop: theme.spacing.unit * 5,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  sliderLabels: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.unit,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing.unit * 2,
  },
  secondaryButton: {
    color: theme.palette.text.secondary,
    fontSize: 12,
    marginTop: theme.spacing.unit,
  },
});

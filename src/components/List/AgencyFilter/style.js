// @flow

export default (theme) => ({
  select: {
    maxWidth: 250,
  },
  '@global': {
    '.Select-control': {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: 20,
      marginTop: 1,
      backgroundColor: 'transparent',
      borderRadius: 5,
      border: 'none',
      fontSize: 16,
      padding: '0 30px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:hover': {
        boxShadow: 'none',
      },
    },
    '.Select.is-open > .Select-control': {
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      borderColor: 'transparent',
      backgroundColor: 'transparent',
    },
    '.Select-multi-value-wrapper': {
      flexGrow: 1,
      display: 'flex',
      flexWrap: 'wrap',
    },
    '.Select--multi .Select-input': {
      margin: 0,
    },
    '.Select.has-value.is-clearable.Select--single > .Select-control .Select-value': {
      padding: '0 30px',
    },
    '.Select-noresults': {
      padding: theme.spacing.unit * 2,
    },
    '.Select-input': {
      display: 'inline-flex !important',
      padding: 0,
      height: 'auto',
    },
    '.Select-input input': {
      background: 'transparent',
      border: 0,
      padding: 0,
      cursor: 'default',
      display: 'inline-block',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      margin: 0,
      outline: 0,
    },
    '.Select-placeholder, .Select--single .Select-value': {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(16),
      padding: '0 30px',
    },
    '.Select .Select-value': {
      color: `${theme.palette.text.primary} !important`,
    },
    '.Select-placeholder': {
      opacity: 0.42,
      color: theme.palette.common.black,
    },
    '.Select.is-focused:not(.is-open) > .Select-control': {
      boxShadow: 'none',
      backgroundColor: 'transparent',
    },
    '.Select-clear-zone': {
      display: 'none',
    },
    '.Select-arrow-zone': {
      position: 'absolute',
      left: 0,
      top: -2,
    },
  },
});

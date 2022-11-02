/* eslint-disable import/no-anonymous-default-export */
export default (theme) => ({
  // you can safely use all props from the default theme
  MuiButton: {
    styleOverrides: {
      root: {
        letterSpacing: 0,
      },
    },
    defaultProps: {
      color: 'secondary',
    },
  },
})

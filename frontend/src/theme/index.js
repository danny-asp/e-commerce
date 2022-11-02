import sizing from './sizing'
import palette from './palette'
import overrides from './overrides'

const theme = {
  palette,
  sizing
  // you could safely override all settings from this page and add new ones if necessary:
  // https://mui.com/material-ui/customization/default-theme/#main-content
}

theme.components = overrides(theme)

export default theme

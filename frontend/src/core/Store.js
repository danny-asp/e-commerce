import { SnackbarProvider } from 'notistack'
import { AuthProvider } from './contexts'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import theme from 'theme'

const Store = ({ children }) => {
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <SnackbarProvider maxSnack={3} preventDuplicate>
        <AuthProvider>{children}</AuthProvider>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default Store

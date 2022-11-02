import { CircularProgress } from '@mui/material'
import { ErrorBoundary } from 'components'
import { Outlet } from 'react-router-dom/dist'

const Main = ({ isSuspense }) => {
  return (
    <ErrorBoundary>
      <div>{isSuspense ? <CircularProgress /> : <Outlet />}</div>
    </ErrorBoundary>
  )
}

export default Main

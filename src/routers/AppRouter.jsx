import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SocketProvider } from '../context/SocketContext';
import { LoginScreen } from '../pages';
import { DashboardRouter } from './DashboardRouter';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={
          <PublicRoutes>
            <LoginScreen />
          </PublicRoutes>
        } />

        <Route index path='/*' element={
          <PrivateRoutes>
            <SocketProvider>
            <DashboardRouter />
            </SocketProvider>
          </PrivateRoutes>
        } />
      </Routes>
    </BrowserRouter>
  )
}

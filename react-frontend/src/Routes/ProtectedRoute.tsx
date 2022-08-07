import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'

// Only guests can visit these pages (login/register)
export const GuestsRoute = () => {
   const isUserLoggedIn = useAppSelector(state => state.auth.userLoggedIn)
   const accessToken = useAppSelector(state => state.auth.accessToken)
   return isUserLoggedIn && accessToken !== null ? <Navigate to='/' /> : <Outlet />
}

// Only loggedIn users can visit
export const AuthProtectedRoute = () => {
   const isUserLoggedIn = useAppSelector(state => state.auth.userLoggedIn)
   const accessToken = useAppSelector(state => state.auth.accessToken)
   return !isUserLoggedIn && accessToken === null ? <Navigate to='/login' /> : <Outlet />
}

// Admin Routes
export const AdminRoute = () => {
   const isUserLoggedIn = useAppSelector(state => state.auth.userLoggedIn)
   const accessToken = useAppSelector(state => state.auth.accessToken)
   const userIsAdmin = useAppSelector(state => state.auth.isAdmin)
   return isUserLoggedIn && accessToken !== null && userIsAdmin ? <Outlet /> : <Navigate to='/' />
}

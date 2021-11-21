import React, { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'

// Only guests can visit these pages (login/register)
export const GuestsRoute: React.FC<{ children: ReactElement }> = ({ children }) => {
   const isUserLoggedIn = useAppSelector((state) => state.auth.userLoggedIn)
   return isUserLoggedIn ? <Navigate to='/' /> : children
}

// Only loggedIn users can visit
export const AuthProtectedRoute: React.FC<{ children: ReactElement }> = ({ children }) => {
   const isUserLoggedIn = useAppSelector((state) => state.auth.userLoggedIn)
   return !isUserLoggedIn ? <Navigate to='/login' /> : children
}

// Admin Routes
export const AdminRoute: React.FC<{ children: ReactElement }> = ({ children }) => {
   const userIsAdmin = useAppSelector((state) => state.auth.isAdmin)
   return userIsAdmin ? children : <Navigate to='/login' />
}

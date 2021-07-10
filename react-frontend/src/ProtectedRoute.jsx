import React from 'react'
import { Route, Redirect, useLocation } from 'react-router'
import { useAppSelector } from './app/hooks'

const AuthProtectedRoute = ({ component: Component, ...rest }) => {
   const userLoggedIn = useAppSelector((state) => state.auth.userLoggedIn)
   return <Route {...rest} render={(props) => (userLoggedIn ? <Component {...props} /> : <Redirect to='/login' />)} />
}

const ProtectedRoute = ({ component: Component, ...rest }) => {
   const {state} = useLocation()
   return <Route {...rest} render={(props) => (state?.details ? <Component {...props} /> : <Redirect to='/' />)} />
}

export default ProtectedRoute

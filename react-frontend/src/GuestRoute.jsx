import React from 'react'
import { Route, Redirect } from 'react-router'
import { useAppSelector } from './app/hooks'

const ProtectedRoute = ({ component: Component, ...rest }) => {
   const userLoggedIn = useAppSelector((state) => state.auth.userLoggedIn)
   return <Route {...rest} render={(props) => (!userLoggedIn ? <Component {...props} /> : <Redirect to='/' />)} />
}

export default ProtectedRoute
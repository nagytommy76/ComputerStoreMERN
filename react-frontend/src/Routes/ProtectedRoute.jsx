import React from 'react'
import { Route, useLocation, Redirect, useHistory } from 'react-router'
import { useAppSelector } from '../app/hooks'

// Only loggedIn users can visit
export const AuthProtectedRoute = ({ component: Component, ...rest }) => {
   const userLoggedIn = useAppSelector((state) => state.auth.userLoggedIn)
   return <Route {...rest} render={(props) => (userLoggedIn ? <Component {...props} /> : <Redirect to='/login' />)} />
}


export const ProtectedRoute = ({ component: Component, ...rest }) => {
   const {state} = useLocation()
   const history = useHistory()
   return <Route {...rest} render={(props) => (state?.details ? <Component {...props} /> : history.goBack()) }/>
}

// Only guests can visit these pages (login/register)
export const GuestsRoute = ({ component: Component, ...rest }) => {
   const history = useHistory()
   const userLoggedIn = useAppSelector((state) => state.auth.userLoggedIn)
   return <Route {...rest} render={(props) => (!userLoggedIn ? <Component {...props} /> :history.goBack())} />
}

export const AdminRoute = ({ component: Component, ...rest }) => {
   const history = useHistory()
   const userIsAdmin = useAppSelector((state) => state.auth.isAdmin)
   return <Route {...rest} render={(props) => (userIsAdmin ? <Component {...props} /> :history.goBack())} />
}
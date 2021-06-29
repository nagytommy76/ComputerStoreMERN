import React from 'react'
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './page/Navbar/Navbar'
import GuestRoute from './GuestRoute'
// import ProtectedRoute from './ProtectedRoute'

const Login = React.lazy(() => import('./page/Auth/Login/Login'))
const Register = React.lazy(() => import('./page/Auth/Register/Register'))
const Welcome = React.lazy(() => import('./page/Welcome/Welcome'))
const Page404 = React.lazy(() => import('./page/404/Page404'))

axios.defaults.baseURL = 'http://localhost:5050/api'

const App = () => {
   return (
      <BrowserRouter>
         <React.Suspense fallback={<h1>Tötlés...</h1>}>
            <Navbar />
            <Switch>
               <Route path='/' exact component={Welcome} />
               <GuestRoute path='/register' component={Register} />
               <GuestRoute path='/login' component={Login} />
               {/* <ProtectedRoute path='/register' component={Register} /> */}
               <Route component={Page404} />
            </Switch>
         </React.Suspense>
      </BrowserRouter>
   )
}

export default App

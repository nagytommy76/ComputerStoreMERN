import React, { lazy } from 'react'

import { AdminRoute, AuthProtectedRoute, GuestsRoute } from './Routes/ProtectedRoute'
import { Routes as RoutesDOM, Route } from 'react-router-dom'
import ScrollToTop from './Routes/ScrollToTop'

const Login = lazy(() => import(/*webpackChunkName: "LoginPage"*/ './page/Auth/Login/Login'))
const Register = lazy(() => import(/*webpackChunkName: "RegisterPage"*/ './page/Auth/Register/Register'))
const EmailValidation = lazy(
   () => import(/*webpackChunkName: "EmailValidation"*/ './page/Auth/Validation/EmailValidation')
)
const ForgotPassword = lazy(
   () => import(/*webpackChunkName: "ForgotPassword"*/ './page/Auth/ForgotPassword/ForgotPassword')
)
const UserOrders = lazy(() => import(/*webpackChunkName: "UserOrders"*/ './page/Orders/Orders'))

const Welcome = lazy(() => import(/*webpackChunkName: "WelcomePage"*/ './page/Welcome/Welcome'))
const Page404 = lazy(() => import(/*webpackChunkName: "404Page"*/ './page/404/Page404'))
const Checkout = lazy(() => import(/*webpackChunkName: "Checkout"*/ './page/CheckoutPage/Checkout'))

const Admin = lazy(() => import(/*webpackChunkName: "Admin"*/ './page/Admin/Admin'))

const VgaProducts = lazy(() => import(/*webpackChunkName: "VgaProducts"*/ './page/ShopPages/Vga/VgaShop'))
const VgaDetails = lazy(
   () => import(/*webpackChunkName: "VgaDetails"*/ './page/ShopPages/Vga/VgaDetails/VgaDetails')
)

const CpuProducts = lazy(() => import(/*webpackChunkName: "CpuProducts"*/ './page/ShopPages/Cpu/CpuShop'))
const CpuDetails = lazy(
   () => import(/*webpackChunkName: "CpuDetails"*/ './page/ShopPages/Cpu/CpuDetails/CpuDetails')
)

const MemoryProducts = lazy(
   () => import(/*webpackChunkName: "MemoryProducts"*/ './page/ShopPages/Memory/MemoryShop')
)
const MemoryDetails = lazy(
   () => import(/*webpackChunkName: "MemoryDetails"*/ './page/ShopPages/Memory/MemoryDetails/MemoryDetails')
)

const HDDProducts = lazy(() => import(/*webpackChunkName: "HDDProducts"*/ './page/ShopPages/HDD/HDDShop'))
const HDDDetails = lazy(
   () => import(/*webpackChunkName: "HDDDetails"*/ './page/ShopPages/HDD/HDDDetails/HDDDetails')
)

const Routes = () => {
   return (
      <ScrollToTop>
         <RoutesDOM>
            <Route path='/' element={<Welcome />} />
            <Route path='/vga/vga-details/:productId' element={<VgaDetails />} />
            <Route path='/cpu/cpu-details/:productId' element={<CpuDetails />} />
            <Route path='/memory/memory-details/:productId' element={<MemoryDetails />} />
            <Route path='/hdd/hdd-details/:productId' element={<HDDDetails />} />
            <Route path='/vga' element={<VgaProducts />} />
            <Route path='/cpu' element={<CpuProducts />} />
            <Route path='/memory' element={<MemoryProducts />} />
            <Route path='/hdd' element={<HDDProducts />} />
            <Route path='/orders' element={<UserOrders />} />
            <Route
               path='/register'
               element={
                  <GuestsRoute>
                     <Register />
                  </GuestsRoute>
               }
            />
            <Route
               path='/login'
               element={
                  <GuestsRoute>
                     <Login />
                  </GuestsRoute>
               }
            />
            <Route
               path='/email-confirm/:confirmCode'
               element={
                  <GuestsRoute>
                     <EmailValidation />
                  </GuestsRoute>
               }
            />
            <Route
               path='/forgot-password/:userEmail/:forgotPassToken'
               element={
                  <GuestsRoute>
                     <ForgotPassword />
                  </GuestsRoute>
               }
            />
            <Route
               path='/checkout'
               element={
                  <AuthProtectedRoute>
                     <Checkout />
                  </AuthProtectedRoute>
               }
            />
            <Route
               path='/admin/*'
               element={
                  <AdminRoute>
                     <Admin />
                  </AdminRoute>
               }
            />
            <Route path='*' element={<Page404 />} />
         </RoutesDOM>
      </ScrollToTop>
   )
}

export default Routes

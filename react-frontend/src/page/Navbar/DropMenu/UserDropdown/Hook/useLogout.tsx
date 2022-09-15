import React from 'react'
import { axiosInstance as axios } from '../../../../../AxiosSetup/AxiosInstance'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../../../../../app/hooks'
import { logoutUser } from '../../../../../app/slices/AuthSlice'
import { removeCartItemsAfterLogout } from '../../../../../app/slices/CartSlice'
import { restoreUserDetails } from '../../../../../app/slices/Checkout/UserDetailsSlice'

const useLogout = () => {
   const dispatch = useAppDispatch()
   const navigate = useNavigate()
   const logout = async () => {
      try {
         const response = await axios.post('/auth/logout')
         if (response.status === 200) {
            dispatch(restoreUserDetails())
            dispatch(removeCartItemsAfterLogout())
            dispatch(logoutUser())
            navigate('/')
         }
      } catch (error) {
         console.log(error)
      }
   }
   return logout
}

export default useLogout

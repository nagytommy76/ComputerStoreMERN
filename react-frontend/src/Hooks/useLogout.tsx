import { axiosInstance as axios } from '../AxiosSetup/AxiosInstance'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../app/hooks'
import { logoutUser } from '../app/slices/AuthSlice'
import { removeCartItemsAfterLogout } from '../app/slices/CartSlice'
import { restoreUserDetails } from '../app/slices/Checkout/UserDetailsSlice'

const useLogout = () => {
   const dispatch = useAppDispatch()
   const navigate = useNavigate()

   const logoutLogic = (redirectPath: string | undefined = '/', state: any | undefined = {}) => {
      dispatch(restoreUserDetails())
      dispatch(removeCartItemsAfterLogout())
      dispatch(logoutUser())
      navigate(redirectPath, { state })
   }

   const logout = async (redirectPath: string | undefined = '/', state: any | undefined = {}) => {
      try {
         const response = await axios.post('/auth/logout')
         if (response.status === 200) logoutLogic(redirectPath, { state })
      } catch (error) {
         console.log(error)
      } finally {
         logoutLogic(redirectPath, { state })
      }
   }
   return logout
}

export default useLogout

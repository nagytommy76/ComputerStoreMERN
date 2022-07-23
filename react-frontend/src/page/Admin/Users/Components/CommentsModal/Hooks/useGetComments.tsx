import { useReducer, useEffect } from 'react'
import { axiosInstance } from '../../../../../../AxiosSetup/AxiosInstance'

import { commentsReducer, ProductActionTypes, initialState } from '../Reducer/ModalReducer'

const useGetComments = (userID: string | null) => {
   const [state, dispatch] = useReducer(commentsReducer, initialState)

   useEffect(() => {
      const fetchUserComments = async () => {
         try {
            const response = await axiosInstance.get(`/admin/users/get-all-rating`, {
               params: {
                  userID: userID,
               },
            })
            dispatch({
               type: ProductActionTypes.CPU,
               payload: response.data.cpu,
            })
            dispatch({
               type: ProductActionTypes.VGA,
               payload: response.data.vga,
            })
            dispatch({
               type: ProductActionTypes.MEMORY,
               payload: response.data.memory,
            })
            dispatch({
               type: ProductActionTypes.SSD,
               payload: response.data.ssd,
            })
            dispatch({
               type: ProductActionTypes.HDD,
               payload: response.data.hdd,
            })
         } catch (error) {
            console.log(error)
         }
      }
      userID && fetchUserComments()
   }, [userID])
   return {
      commentsState: state,
   }
}

export default useGetComments

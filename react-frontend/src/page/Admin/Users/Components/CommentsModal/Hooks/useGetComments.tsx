import React, { useReducer, useEffect } from 'react'
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
            console.log(response.data)
            //   setCpuComments(response.data.cpu)
         } catch (error) {
            console.log(error)
         }
      }
      userID && fetchUserComments()
   }, [userID])
   return {}
}

export default useGetComments

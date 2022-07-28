import { useEffect, useContext } from 'react'
import { axiosInstance } from '../../../../../../AxiosSetup/AxiosInstance'
import { CommentContext } from '../../../Context/CommentContext'

import { ProductActionTypes } from '../Reducer/ModalReducer'

const useGetComments = () => {
   const { commentDispatch, selectedUserIdAndName } = useContext(CommentContext)

   useEffect(() => {
      const fetchUserComments = async () => {
         try {
            const response = await axiosInstance.get(`/admin/users/get-all-rating`, {
               params: {
                  userID: selectedUserIdAndName.userID,
               },
            })
            commentDispatch({
               type: ProductActionTypes.CPU,
               payload: {
                  incomingData: response.data.cpu,
               },
            })
            commentDispatch({
               type: ProductActionTypes.VGA,
               payload: {
                  incomingData: response.data.vga,
               },
            })
            commentDispatch({
               type: ProductActionTypes.MEMORY,
               payload: {
                  incomingData: response.data.memory,
               },
            })
            commentDispatch({
               type: ProductActionTypes.SSD,
               payload: {
                  incomingData: response.data.ssd,
               },
            })
            commentDispatch({
               type: ProductActionTypes.HDD,
               payload: { incomingData: response.data.hdd },
            })
         } catch (error) {
            console.log(error)
         }
      }
      selectedUserIdAndName.userID && fetchUserComments()
   }, [selectedUserIdAndName.userID, commentDispatch])
   return null
}

export default useGetComments

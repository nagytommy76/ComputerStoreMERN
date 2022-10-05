import React, { useEffect } from 'react'
import { axiosInstance as axios } from '../../../AxiosSetup/AxiosInstance'
import { useNavigate } from 'react-router-dom'

const useIsAdmin = () => {
   const navigate = useNavigate()
   useEffect(() => {
      const checkUserIsAdmin = async () => {
         try {
            const response = await axios.get('admin/check-is-admin')
            response.status !== 200 && navigate('/')
         } catch (error) {
            navigate('/')
         }
      }
      checkUserIsAdmin()
   }, [])
   return null
}

export default useIsAdmin

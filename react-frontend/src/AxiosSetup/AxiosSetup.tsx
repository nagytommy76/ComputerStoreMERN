import axios, { AxiosError } from 'axios'
import React from 'react'
import { store } from '../app/store'
import { generateNewAccessToken } from '../app/slices/AuthSlice'

export const AxiosSetup = (accessToken: string | null, refreshToken: string | null) => {
   axios.defaults.baseURL = 'http://localhost:5050/api'
   axios.defaults.headers['Content-Type'] = 'Application/json'

   axios.interceptors.request.use(
      (config) => {
         console.log(accessToken)
         // console.log(refreshToken)
         if (accessToken) config.headers.Authorization = `Barer ${accessToken}`
         return config
      },
      (error) => Promise.reject(error)
   )

   axios.interceptors.response.use(
      (response) => {
         return response
      },
      (error: AxiosError) => {
         if (error.response?.status === 403) {
            // Ekkor kell egy új accessToken (Forbidden)
            console.log('403 error')
            // store.dispatch(generateNewAccessToken())
         } else {
            console.log('Helló')

            store.dispatch(generateNewAccessToken(refreshToken))
            // Itt pedig be kell lépni mert a refres token se jó
         }
      }
   )
}

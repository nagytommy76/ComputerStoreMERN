import React from 'react'
import axios from 'axios'
import { PictureUrlType, ValidationErrorWithAxiosError } from '../Vga/Types'
import { ValidationError } from '../AdminTypes'

const handleInsertSubmit = (
   productType: string,
   anyProducts: any,
   pictureUrls: PictureUrlType[],
   setValidationErrors: React.Dispatch<React.SetStateAction<ValidationError[]>>,
   setProductState: React.Dispatch<React.SetStateAction<any>>,
   productProperties: any
) => {
   const filteredPicUrls = pictureUrls.map((x) => x.pictureUrl)
   axios
      .post(`admin/${productType}/insert`, {
         ...anyProducts,
         pictureUrls: filteredPicUrls
      })
      .then((result) => {
         if (result.status === 201) setProductState(productProperties)
      })
      .catch((error: ValidationErrorWithAxiosError) => {
         console.log(error.response?.data.errors)
         if (error.response?.data) setValidationErrors(error.response.data.errors)
      })
}

export default handleInsertSubmit

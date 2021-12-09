import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../../app/hooks'
import { AdressFormStyle, StyledHeading } from './AdressStyle'

import axios from 'axios'
import { ValidationErrorWithAxiosError } from '../../../Admin/Vga/Types'
import { ValidateErrors } from '../../../Helpers/SetErrorMsg'
import { fetchUsersDetails } from '../../../../app/slices/Checkout/UserDetailsSlice'

const Buttons = React.lazy(() => import('./Includes/Buttons'))
const FormInputs = React.lazy(() => import('./Includes/FormInputs'))
const Alerts = React.lazy(() => import('./Includes/Alerts'))

const Adress = () => {
   const dispatch = useAppDispatch()
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   const userDetails = useAppSelector((state) => state.userDetails.userDetails)
   const isUserDetailsFilled = useAppSelector((state) => state.userDetails.isDetailsFilled)

   const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState<boolean>(false)
   const [isSuccess, setIsSuccess] = useState<boolean>(false)
   const [isModified, setIsModified] = useState<boolean>(false)
   const [validateErrors, setValidateErrors] = useState<ValidateErrors[]>([])

   const submitAdressForm = (event: React.MouseEvent) => {
      event.preventDefault()
      setValidateErrors([{ errorMsg: '', field: '', hasError: false }])
      axios
         .post('/auth/insert-details', { userDetails })
         .then((insertedDetails) => {
            if (insertedDetails.status === 201) {
               setIsSuccess(true)
               setIsSubmitBtnDisabled(true)
            }
         })
         .catch((errors: ValidationErrorWithAxiosError) => {
            if (errors.response?.status === 422) {
               const errorResponse = errors.response.data.errors
               if (errorResponse.length > 0) {
                  errorResponse.forEach((error: any) => {
                     setValidateErrors((prevErrors) => [
                        ...prevErrors,
                        { errorMsg: error.msg, field: error.param, hasError: true }
                     ])
                  })
               }
            }
         })
   }

   const updateDetailsHandler = async (event: React.MouseEvent) => {
      event.preventDefault()
      try {
         const updateResult = await axios.patch('/auth/modify-details', { userDetails })
         if (updateResult.status === 200) setIsModified(true)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      if (!isUserDetailsFilled) {
         dispatch(fetchUsersDetails(setIsSubmitBtnDisabled))
      }
   }, [isUserDetailsFilled, dispatch])
   return (
      <AdressFormStyle darkTheme={isDarkTheme}>
         <StyledHeading>Számlázási adatok</StyledHeading>
         <FormInputs validateErrors={validateErrors} />
         <Buttons
            isSubmitBtnDisabled={isSubmitBtnDisabled}
            submitAdressForm={submitAdressForm}
            updateDetailsHandler={updateDetailsHandler}
         />
         <Alerts isModified={isModified} setIsModified={setIsModified} isSuccess={isSuccess} setIsSuccess={setIsSuccess} />
      </AdressFormStyle>
   )
}

export default Adress

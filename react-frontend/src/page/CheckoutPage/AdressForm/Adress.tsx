import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../../app/hooks'
import { AdressFormStyle, StyledHeading, AdressContainer } from './AdressStyle'

import { UserDetails } from '../CheckoutTypes'
import axios from 'axios'
import { ValidationErrorWithAxiosError } from '../../Admin/Vga/Types'
import { ValidateErrors } from '../../Helpers/SetErrorMsg'

const Buttons = React.lazy(() => import('./Includes/Buttons'))
const FormInputs = React.lazy(() => import('./Includes/FormInputs'))
const Alerts = React.lazy(() => import('./Includes/Alerts'))

const Adress = () => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState<boolean>(false)
   const [isSuccess, setIsSuccess] = useState<boolean>(false)
   const [isModified, setIsModified] = useState<boolean>(false)
   const [validateErrors, setValidateErrors] = useState<ValidateErrors[]>([])
   const [userDetails, setUserDetails] = useState<UserDetails>({
      firstName: '',
      lastName: '',
      phone: '',
      address: {
         zipCode: 1000,
         city: '',
         street: '',
         houseNumber: '',
         floor: '',
         door: ''
      }
   })

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
      axios
         .get('/auth/get-details')
         .then((result) => {
            if (result.data && result.data.userDetails !== null && result.data.isDetailsFilled) {
               setUserDetails(result.data.userDetails)
               setIsSubmitBtnDisabled(true)
            }
         })
         .catch((error) => console.error(error))
   }, [])
   return (
      <AdressContainer>
         <AdressFormStyle darkTheme={isDarkTheme}>
            <StyledHeading>Szállítási adatok</StyledHeading>
            <FormInputs setUserDetails={setUserDetails} userDetails={userDetails} validateErrors={validateErrors} />
            <Buttons
               isSubmitBtnDisabled={isSubmitBtnDisabled}
               submitAdressForm={submitAdressForm}
               updateDetailsHandler={updateDetailsHandler}
            />
            <Alerts isModified={isModified} setIsModified={setIsModified} isSuccess={isSuccess} setIsSuccess={setIsSuccess} />
         </AdressFormStyle>
      </AdressContainer>
   )
}

export default Adress

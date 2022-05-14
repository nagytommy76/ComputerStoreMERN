import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../../app/hooks'
import { AdressFormStyle, StyledHeading } from './AdressStyle'

import { axiosInstance as axios } from '../../../../AxiosSetup/AxiosInstance'
import { fetchUsersDetails, insertUserDetails } from '../../../../app/slices/Checkout/UserDetailsSlice'

const Buttons = React.lazy(() => import('./Includes/Buttons'))
const FormInputs = React.lazy(() => import('./Includes/FormInputs'))
const Alerts = React.lazy(() => import('./Includes/Alerts'))

const Adress = () => {
   const dispatch = useAppDispatch()
   const isDarkTheme = useAppSelector(state => state.theme.isDarkTheme)
   const userDetails = useAppSelector(state => state.userDetails.userDetails)
   const isUserDetailsFilled = useAppSelector(state => state.userDetails.isDetailsFilled)

   const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState<boolean>(false)
   const [isModified, setIsModified] = useState<boolean>(false)

   const submitAdressForm = (event: React.MouseEvent) => {
      event.preventDefault()
      dispatch(insertUserDetails(setIsSubmitBtnDisabled))
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
         dispatch(fetchUsersDetails())
      } else setIsSubmitBtnDisabled(true)
   }, [isUserDetailsFilled, dispatch])
   return (
      <AdressFormStyle darkTheme={isDarkTheme}>
         <StyledHeading>Számlázási adatok</StyledHeading>
         <FormInputs />
         <Buttons
            isSubmitBtnDisabled={isSubmitBtnDisabled}
            submitAdressForm={submitAdressForm}
            updateDetailsHandler={updateDetailsHandler}
         />
         <Alerts isModified={isModified} setIsModified={setIsModified} />
      </AdressFormStyle>
   )
}

export default Adress

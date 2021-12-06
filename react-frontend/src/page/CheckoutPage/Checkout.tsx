import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { PageContainer } from './BaseStyle'

import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const AdressForm = React.lazy(() => import('./AdressForm/Adress'))
const Products = React.lazy(() => import('./Products/Products'))
const MakeOrderButton = React.lazy(() => import('./MakeOrder/MakeOrder'))

const Checkout = () => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   const [activeStep, setActiveStep] = React.useState(0)

   const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
   }

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1)
   }

   return (
      <>
         <PageContainer isDarkTheme={isDarkTheme}>
            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
               <Stepper activeStep={activeStep} sx={{ marginTop: '15rem' }}>
                  <Step>
                     <StepLabel>Teszt 1 oldal</StepLabel>
                  </Step>
                  <Step>
                     <StepLabel>Teszt 2 oldal</StepLabel>
                  </Step>
               </Stepper>
               <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Button color='inherit' disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                     Back
                  </Button>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button onClick={handleNext}>{activeStep === 2 - 1 ? 'Finish' : 'Next'}</Button>
               </Box>
               {activeStep === 1 ? <AdressForm /> : <h1>semmi</h1>}
            </Box>
            <Products />
            <MakeOrderButton />
         </PageContainer>
      </>
   )
}

// https://mui.com/components/steppers/#linear

export default Checkout

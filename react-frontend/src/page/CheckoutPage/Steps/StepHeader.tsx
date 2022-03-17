import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { handleNextButtonDisabled, setCurrentStep } from '../../../app/slices/Checkout/StepsSlice'

import Tooltip from '@mui/material/Tooltip'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const StepHeader: React.FC = () => {
   const dispatch = useAppDispatch()
   const isUserDetailsFilled = useAppSelector(state => state.userDetails.isDetailsFilled)
   const activeStep = useAppSelector(state => state.steps.currentStep)
   const isNextBtnDisabled = useAppSelector(state => state.steps.isNextBtnDisabled)

   const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false)

   const handleTooltipOpen = () => {
      if (!isUserDetailsFilled) setIsTooltipOpen(true)
   }
   const handleTooltipClose = () => {
      setIsTooltipOpen(false)
   }

   const handleNext = () => {
      dispatch(setCurrentStep(activeStep + 1))
   }

   const handleBack = () => {
      dispatch(setCurrentStep(activeStep - 1))
   }

   useEffect(() => {
      dispatch(handleNextButtonDisabled())
   }, [isUserDetailsFilled, dispatch, activeStep])

   return (
      <>
         <Stepper activeStep={activeStep} alternativeLabel>
            <Step>
               <StepLabel>Számlázási adatok megadása</StepLabel>
            </Step>
            <Step>
               <StepLabel>Átvételi lehetőségek</StepLabel>
            </Step>
            <Step>
               <StepLabel>Fizetési mód kiválasztása</StepLabel>
            </Step>
            <Step>
               <StepLabel>Rendelés leadása</StepLabel>
            </Step>
         </Stepper>
         <Box sx={{ display: 'flex', flexDirection: 'row', mr: 5, ml: 5, mt: 2, mb: 4 }}>
            <Button color='inherit' disabled={activeStep === 0} onClick={handleBack}>
               Vissza
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Tooltip
               open={isTooltipOpen}
               onClose={handleTooltipClose}
               onOpen={handleTooltipOpen}
               title={<p>Kötelező kitölteni a személyes adatokat a tovább lépéshez!</p>}
               arrow
            >
               <span>
                  <Button onClick={handleNext} disabled={isNextBtnDisabled}>
                     {activeStep === 3 ? 'Véglegesítés' : 'Következő'}
                  </Button>
               </span>
            </Tooltip>
         </Box>
      </>
   )
}

export default StepHeader

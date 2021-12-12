import React, { useEffect, useState, useCallback } from 'react'
import { useAppSelector } from '../../../app/hooks'

import Tooltip from '@mui/material/Tooltip'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const StepHeader: React.FC<{ activeStep: number; setActiveStep: React.Dispatch<React.SetStateAction<number>> }> = ({
   activeStep,
   setActiveStep
}) => {
   const isUserDetailsFilled = useAppSelector((state) => state.userDetails.isDetailsFilled)
   const [isNextBtnDisabled, setIsNextBtnDisabled] = useState<boolean>(false)
   const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
   }

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1)
   }

   const isNextButtonDisabled = useCallback(() => {
      if (!isUserDetailsFilled) setIsNextBtnDisabled(true)
      else setIsNextBtnDisabled(false)
      activeStep === 4 && setIsNextBtnDisabled(true)
   }, [activeStep, isUserDetailsFilled])

   useEffect(() => {
      isNextButtonDisabled()
   }, [isUserDetailsFilled, isNextButtonDisabled])

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
         <Box sx={{ display: 'flex', flexDirection: 'row', mr: 5, ml: 5, mt: 2 }}>
            <Button color='inherit' disabled={activeStep === 0} onClick={handleBack}>
               Vissza
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Tooltip title={<p>Kötelező kitölteni a személyes adatokat a tovább lépéshez!</p>} arrow>
               <span>
                  <Button onClick={handleNext} disabled={isNextBtnDisabled}>
                     {activeStep === 4 - 1 ? 'Véglegesítés' : 'Következő'}
                  </Button>
               </span>
            </Tooltip>
         </Box>
      </>
   )
}

export default StepHeader

import React from 'react'

import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const StepHeader: React.FC<{ activeStep: number; setActiveStep: React.Dispatch<React.SetStateAction<number>> }> = ({
   activeStep,
   setActiveStep
}) => {
   const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
   }

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1)
   }

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
         <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Button color='inherit' disabled={activeStep === 0} onClick={handleBack}>
               Vissza
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext} disabled={activeStep === 4}>
               {activeStep === 4 - 1 ? 'Véglegesítés' : 'Következő'}
            </Button>
         </Box>
      </>
   )
}

export default StepHeader

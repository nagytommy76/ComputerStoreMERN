import React, { useState } from 'react'
import { LeftPageContainer } from '../BaseStyle'
import { StepsContainer } from './Style'

const StepHeader = React.lazy(() => import('./StepHeader'))
const AdressForm = React.lazy(() => import('./AddressForm/Adress'))
const PickUpOption = React.lazy(() => import('./PickUpOption/PickUp'))

const stepComponents = [<AdressForm />, <PickUpOption />, <h1>Fizetési módok</h1>, <h1>Rendelés véglegesítése</h1>]

const LeftStepsContainer = () => {
   const [currentStep, setCurrentStep] = useState<number>(0)

   return (
      <LeftPageContainer>
         <StepHeader activeStep={currentStep} setActiveStep={setCurrentStep} />
         <StepsContainer>{stepComponents[currentStep]}</StepsContainer>
      </LeftPageContainer>
   )
}

export default LeftStepsContainer

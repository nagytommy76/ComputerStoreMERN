import React, { useState } from 'react'
import { LeftPageContainer } from '../BaseStyle'
import { StepsContainer } from './Style'

const StepHeader = React.lazy(() => import('./StepHeader'))
const AdressForm = React.lazy(() => import('./AddressForm/Address'))
const PickUpOption = React.lazy(() => import('./PickUpOption/PickUp'))
const Payment = React.lazy(() => import('./PaymentOption/Payment'))

const LeftStepsContainer = () => {
   const [currentStep, setCurrentStep] = useState<number>(0)
   const stepComponents = [<AdressForm />, <PickUpOption />, <Payment />, <h1>Rendelés véglegesítése</h1>]

   return (
      <LeftPageContainer>
         <StepHeader activeStep={currentStep} setActiveStep={setCurrentStep} />
         <React.Suspense fallback={<h1>Ide kell egy fallback</h1>}>
            <StepsContainer>{stepComponents[currentStep]}</StepsContainer>
         </React.Suspense>
      </LeftPageContainer>
   )
}

export default LeftStepsContainer

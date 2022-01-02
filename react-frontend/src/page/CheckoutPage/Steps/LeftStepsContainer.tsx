import React, { Suspense } from 'react'
import { useAppSelector } from '../../../app/hooks'
import { LeftPageContainer } from '../BaseStyle'
import { StepsContainer } from './Style'

import AddressFormSuspense from '../../../SuspenseComponents/CheckoutPage/AddressFormSuspense'
const StepHeader = React.lazy(() => import('./StepHeader'))
const AdressForm = React.lazy(() => import('./AddressForm/Address'))
const PickUpOption = React.lazy(() => import('./PickUpOption/PickUp'))
const Payment = React.lazy(() => import('./PaymentOption/Payment'))
const SummaryOrder = React.lazy(() => import('./Summary/SummaryOrder'))

const LeftStepsContainer = () => {
   const currentStep = useAppSelector((state) => state.steps.currentStep)
   const stepComponents = [
      <Suspense fallback={<AddressFormSuspense />}>
         <AdressForm />
      </Suspense>,
      <PickUpOption />,
      <Payment />,
      <SummaryOrder />
   ]

   return (
      <LeftPageContainer>
         <StepHeader />
         <React.Suspense fallback={<h1>Ide kell egy fallback</h1>}>
            <StepsContainer>{stepComponents[currentStep]}</StepsContainer>
         </React.Suspense>
      </LeftPageContainer>
   )
}

export default LeftStepsContainer

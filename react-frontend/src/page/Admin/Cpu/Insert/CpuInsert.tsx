import React, { lazy } from 'react'
import axios from 'axios'
import { StyledForm, FullWidhtContainerStyle } from '../../Components/Form/FormStyle'

const SubmitButton = lazy(() => import('../../Components/InputFields/SubmitButton/SubmitButton'))

const CpuInsert = () => {
   const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault()
      console.log('CPU Bevitele')
   }
   return (
      <StyledForm onSubmit={handleSubmit}>
         <h1>sdads</h1>
         <SubmitButton>Bevitel</SubmitButton>
      </StyledForm>
   )
}

export default CpuInsert

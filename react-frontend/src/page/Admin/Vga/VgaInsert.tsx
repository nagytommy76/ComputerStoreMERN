import React, { useState } from 'react'
import styled from 'styled-components'
import InputField from '../Components/InputField/InputField'

const AdminVga = () => {
   const [itemNumber, setItemNumber] = useState('')
   const insertVga = (event: React.FormEvent) => {
      event.preventDefault()
      console.log('vga bevitele')
   }
   return (
      <StyledForm onSubmit={insertVga}>
         <FormContainerStyle>
            <InputField labelText='Termék kód' onChangeEvent={(event) => setItemNumber(event.target.value)} value={itemNumber} />
            <InputField labelText='Termék kód' onChangeEvent={(event) => setItemNumber(event.target.value)} value={itemNumber} />
            <InputField labelText='Termék kód' onChangeEvent={(event) => setItemNumber(event.target.value)} value={itemNumber} />
            <InputField labelText='Termék kód' onChangeEvent={(event) => setItemNumber(event.target.value)} value={itemNumber} />
            <InputField labelText='Termék kód' onChangeEvent={(event) => setItemNumber(event.target.value)} value={itemNumber} />
            <InputField labelText='Termék kód' onChangeEvent={(event) => setItemNumber(event.target.value)} value={itemNumber} />
            <InputField labelText='Termék kód' onChangeEvent={(event) => setItemNumber(event.target.value)} value={itemNumber} />
            <InputField labelText='Termék kód' onChangeEvent={(event) => setItemNumber(event.target.value)} value={itemNumber} />
            <InputField labelText='Termék kód' onChangeEvent={(event) => setItemNumber(event.target.value)} value={itemNumber} />
         </FormContainerStyle>
      </StyledForm>
   )
}

const StyledForm = styled.form`
   width: 80%;
   height: 90%;
   background-color: #fff;
`

const FormContainerStyle = styled.section`
   display: grid;
   grid-template-columns: repeat(3, 30%);
   justify-content: center;
   row-gap: 2rem;
   column-gap: 1rem;
`

export default AdminVga

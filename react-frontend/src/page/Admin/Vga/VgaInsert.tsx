import React from 'react'
import styled from 'styled-components'

const AdminVga = () => {
   const insertVga = (event: React.FormEvent) => {
      event.preventDefault()
      console.log('vga bevitele')
   }
   return (
      <StyledForm onSubmit={insertVga}>
         <h1>Vga Bevitele</h1>
      </StyledForm>
   )
}

const StyledForm = styled.form`
   width: 80%;
   height: 90%;
   background-color: #fff;
`

export default AdminVga

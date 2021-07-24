import React from 'react'
import styled from 'styled-components'

const SubmitButton: React.FC<{ buttonText: string }> = ({ buttonText }) => {
   return <StyledSubmit type='submit'>{buttonText}</StyledSubmit>
}

const StyledSubmit = styled.button`
   width: 160px;
   height: 50px;
   margin: 1.5rem;
   cursor: pointer;
   border: none;
   border-radius: 5px;
   background: #1ad402;
   transition: all 0.1s linear;
   font-size: 1.1rem;
   padding: 0.7rem;
   &:hover {
      transform: scale(1.06);
   }
`

export default SubmitButton

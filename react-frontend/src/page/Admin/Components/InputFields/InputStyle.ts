import styled from 'styled-components'

export const InputContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
`

export const StyledLabel = styled.label`
   margin: 0.5rem 0;
   font-size: 1.1rem;
`

export const InputFieldStyle = styled.input`
   border: 1px solid hsla(0, 0%, 60%, 0.4);
   border-radius: 4px;
   padding: 0.6rem;
   font-size: 1.1rem;
   outline: none;
   /* &:focus {
      border: 2px solid hsla(0, 0% 20%, 0.9);
   } */
`

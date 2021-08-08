import styled from 'styled-components'

const border = `1px solid hsla(0, 0%, 60%, 0.4)`

export const InputContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
`

export const StyledLabel = styled.label`
   text-align: left;
   margin: 0.5rem 0;
   font-size: 1.1rem;
`

export const InputFieldStyle = styled.input`
   width: 90%;
   border: ${border};
   border-radius: 4px;
   padding: 0.6rem;
   font-size: 1.1rem;
   outline: none;
   margin: 0.3rem 0;
`

export const TextAreaStyle = styled.textarea`
   width: 90%;
   border: ${border};
   border-radius: 4px;
   padding: 0.9rem;
   font-size: 1.1rem;
   outline: none;
   margin: 0.3rem 0;
`

export const StyledSelect = styled.select`
   width: 90%;
   border: ${border};
   padding: 0.6rem;
   font-size: 1rem;
   outline: none;
`

export const StyledOption = styled.option`
   outline: none;
   border: ${border};
`

export const StyledErrorMessage = styled.span`
   width: 95%;
   border-radius: 5px;
   background-color: red;
   color: white;
   padding: 0.3rem;
`

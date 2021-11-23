import styled from 'styled-components'

const defaultBorder = `1px solid hsla(0, 0%, 60%, 0.4)`
const redBorder = `hsla(6, 99%, 44%, 0.5)`

export const InputContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
`

export const StyledLabel = styled.label`
   text-align: left;
   margin: 0.5rem 0;
   font-size: 1.1rem;
   width: 85%;
`

export const InputFieldStyle = styled.input<{ isError?: boolean }>`
   width: 90%;
   border: ${defaultBorder};
   border-color: ${({ isError }) => (isError ? redBorder : defaultBorder)};
   border-radius: 4px;
   padding: 0.6rem;
   font-size: 1.1rem;
   outline: none;
   margin: 0.3rem 0;
`

export const StyledSelect = styled.select`
   width: 90%;
   border: ${defaultBorder};
   padding: 0.6rem;
   font-size: 1rem;
   outline: none;
`

export const StyledOption = styled.option`
   outline: none;
   border: ${defaultBorder};
`

export const StyledErrorMessage = styled.span`
   width: 90%;
   font-size: 0.9rem;
   padding: 0.5rem 0 0.5rem 1rem;
   color: white;
   background-color: red;
   border-radius: 5px;
`

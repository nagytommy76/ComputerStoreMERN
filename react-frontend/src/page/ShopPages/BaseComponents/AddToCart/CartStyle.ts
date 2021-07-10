import styled from 'styled-components'

export const CartQuantityStyle = styled.input`
   width: 30px;
   padding: 1rem;
   font-size: 1.1rem;
   text-align: right;
   border: none;
   &::-webkit-outer-spin-button,
   &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
   }

   &:focus {
      font-weight: 600;
      outline: none;
   }
`

export const StyledCartSection = styled.section`
   flex: 1;
`

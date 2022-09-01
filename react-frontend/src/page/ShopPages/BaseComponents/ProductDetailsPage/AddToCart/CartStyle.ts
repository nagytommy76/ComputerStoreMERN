import styled from 'styled-components'

import TextField from '@mui/material/TextField'

export const StyledCartSection = styled.section`
   flex: 1;
   display: flex;
   align-items: center;
`
// Input Field Container

export const InputAndLabelContainer = styled.div`
   display: flex;
   flex-direction: column;
   text-align: center;
`

export const CartQuantityStyle = styled.input`
   width: 30px;
   padding: 0.7rem;
   font-size: 1.1rem;
   text-align: center;
   border: 1px solid hsl(115, 0%, 62%);
   border-radius: 2px;
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

export const StyledNumberInput = styled(TextField)({
   ['::-webkit-outer-spin-button']: {
      backgroundColor: 'red',
      webkitAppearance: 'none',
      margin: 0,
   },
   ['::-webkit-inner-spin-button']: {
      webkitAppearance: 'none',
      margin: 0,
   },
})

export const StyledLabel = styled.label`
   color: hsl(115, 0%, 62%);
`

// Add to cart button

export const AddToCartButton = styled.button`
   width: 85px;
   height: 65px;
   margin-left: 0.8rem;
   border-radius: 2px;
   border: none;
   background-color: #29c400;
   cursor: pointer;
   color: white;
`

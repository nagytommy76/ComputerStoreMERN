import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
`

export const IncreaseDecreaseStyle = styled.span`
   margin-bottom: 0.5rem;
   padding: 0.2rem 0.45rem;
   font-size: 0.8rem;
   border: hsla(0, 0%, 39.21568627450981%, 0.6) solid 1px;
   border-radius: 5px;
   cursor: pointer;
   transition: all 0.2s;

   &:hover:nth-child(1) {
      color: white;
      background-color: hsl(0, 100%, 42%);
   }
   &:hover:nth-child(n + 2) {
      color: white;
      background-color: hsl(99, 100%, 42%);
   }
`

export const QuantityStyle = styled.span`
   font-size: 0.8rem;
   width: 40px;
   padding: 0.4rem;
   text-align: center;
`

import React from 'react'
import { Container, IncreaseDecreaseStyle, QuantityStyle } from './BasketStyle'
import { useAppDispatch } from '../../../../app/hooks'
import { decreaseItemQty, increaseItemQty } from '../../../../app/slices/CartSlice'

const Basket: React.FC<Props> = ({ quaintity, id }) => {
   const dispatch = useAppDispatch()
   return (
      <Container>
         <IncreaseDecreaseStyle onClick={() => dispatch(decreaseItemQty(id))}>-</IncreaseDecreaseStyle>
         <QuantityStyle>{quaintity} db</QuantityStyle>
         <IncreaseDecreaseStyle onClick={() => dispatch(increaseItemQty(id))}>+</IncreaseDecreaseStyle>
      </Container>
   )
}

type Props = {
   id: string
   quaintity: number
}

export default Basket

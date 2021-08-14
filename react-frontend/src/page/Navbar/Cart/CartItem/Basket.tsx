import React from 'react'
import { Container, IncreaseDecreaseStyle, QuantityStyle } from './BasketStyle'
import { useAppDispatch } from '../../../../app/hooks'
import { increaseOrDecreaseByOne } from '../../../../app/slices/CartSlice'

const Basket: React.FC<Props> = ({ quaintity, id }) => {
   const dispatch = useAppDispatch()
   const decrease = () => {
      if (quaintity !== 1) dispatch(increaseOrDecreaseByOne(id, false))
   }
   return (
      <Container>
         <IncreaseDecreaseStyle onClick={decrease}>-</IncreaseDecreaseStyle>
         <QuantityStyle>{quaintity} db</QuantityStyle>
         <IncreaseDecreaseStyle onClick={() => dispatch(increaseOrDecreaseByOne(id))}>+</IncreaseDecreaseStyle>
      </Container>
   )
}

type Props = {
   id: string
   quaintity: number
}

export default Basket

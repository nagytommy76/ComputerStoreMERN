import React from 'react'
import { Container, IncreaseDecreaseStyle, QuantityStyle } from './BasketStyle'

const Basket: React.FC<Props> = ({ quaintity }) => {
   return (
      <Container>
         <IncreaseDecreaseStyle>-</IncreaseDecreaseStyle>
         <QuantityStyle>{quaintity} db</QuantityStyle>
         <IncreaseDecreaseStyle>+</IncreaseDecreaseStyle>
      </Container>
   )
}

type Props = {
   quaintity: number
}

export default Basket

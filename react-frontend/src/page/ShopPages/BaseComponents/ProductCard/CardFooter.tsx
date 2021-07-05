import React from 'react'
import { CardFooterStyle } from './CardStyle'

const CardFooter: React.FC<{ reference: React.MutableRefObject<null> }> = ({ reference }) => {
   return (
      <CardFooterStyle ref={reference}>
         <h5>TESZT</h5>
      </CardFooterStyle>
   )
}

export default CardFooter

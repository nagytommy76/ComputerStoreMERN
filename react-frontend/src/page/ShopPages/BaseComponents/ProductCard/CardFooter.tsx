import React from 'react'
import { CardFooterStyle, FooterCartQuantityStyle, FooterCartAddToCart } from './CardStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
   reference: React.MutableRefObject<null>
   quantityValue: string
   changeEvent: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const CardFooter: React.FC<Props> = ({ reference, quantityValue, changeEvent }) => {
   const addItemToCart = () => {
      console.log(`kosárba helyezve: ${quantityValue} db`)
   }
   return (
      <CardFooterStyle ref={reference}>
         <FooterCartQuantityStyle value={quantityValue} type='number' onChange={changeEvent} />
         <FooterCartAddToCart onClick={addItemToCart}>
            <FontAwesomeIcon icon={['fas', 'cart-plus']} size='2x' />
         </FooterCartAddToCart>
      </CardFooterStyle>
   )
}

export default CardFooter

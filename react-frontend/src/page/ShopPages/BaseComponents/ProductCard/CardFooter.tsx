import React, { useContext } from 'react'
import { CardFooterStyle, FooterCartQuantityStyle, FooterCartAddToCart } from './CardStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAppDispatch } from '../../../../app/hooks'
import { VgaContext } from '../../Vga/VgaContext/VgaContext'
import { addToCart, removeAllEntitesFromCart } from '../../../../app/slices/CartSlice'

type Props = {
   reference: React.MutableRefObject<null>
   quantityValue: string
   changeEvent: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const CardFooter: React.FC<Props> = ({ reference, quantityValue, changeEvent }) => {
   const dispatch = useAppDispatch()
   const { _id, productName, price, displayImage } = useContext(VgaContext)

   const addItemToCart = () => {
      dispatch(addToCart({ _id, productName, price, itemQuantity: quantityValue, displayImage }))
   }

   const removeFromCart = () => {
      dispatch(removeAllEntitesFromCart(_id))
   }
   return (
      <CardFooterStyle ref={reference}>
         <FooterCartQuantityStyle value={quantityValue} type='number' onChange={changeEvent} />
         <FooterCartAddToCart onClick={addItemToCart}>
            <FontAwesomeIcon icon={['fas', 'cart-plus']} size='2x' />
         </FooterCartAddToCart>
         <FooterCartAddToCart onClick={removeFromCart}>
            <FontAwesomeIcon icon={['fas', 'address-book']} size='1x' />
         </FooterCartAddToCart>
      </CardFooterStyle>
   )
}

export default CardFooter

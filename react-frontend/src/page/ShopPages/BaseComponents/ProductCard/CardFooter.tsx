import React, { useContext } from 'react'
import { CardFooterStyle, FooterCartQuantityStyle, FooterCartAddToCart } from './CardStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAppDispatch } from '../../../../app/hooks'
import { ProductContext } from '../../Context/ShopContext'
import { sendCartItemToSaveInDB } from '../../../../app/slices/CartSlice'

type Props = {
   productType: string
   reference: React.MutableRefObject<null>
   quantityValue: string
   changeEvent: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const CardFooter: React.FC<Props> = ({ productType, reference, quantityValue, changeEvent }) => {
   const dispatch = useAppDispatch()
   const { _id, productName, price, displayImage } = useContext(ProductContext)
   const addItemToCart = () => {
      dispatch(
         sendCartItemToSaveInDB(
            { _id, displayName: productName, price, itemQuantity: quantityValue, displayImage },
            `${productType}product`
         )
      )
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

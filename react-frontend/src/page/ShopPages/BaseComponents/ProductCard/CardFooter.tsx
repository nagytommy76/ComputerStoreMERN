import React, { useContext } from 'react'
import { useAppDispatch } from '../../../../app/hooks'
import { sendCartItemToSaveInDB } from '../../../../app/slices/CartSlice'
import { ProductContext } from '../../Context/ShopContext'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { CardFooterStyle } from './CardStyle'
import { CardActions, Button } from '@mui/material'

type Props = {
   productType: string
}

const CardFooter: React.FC<Props> = ({ productType }) => {
   const dispatch = useAppDispatch()
   const { _id, productName, price, displayImage } = useContext(ProductContext)
   const addItemToCart = () => {
      dispatch(
         sendCartItemToSaveInDB(
            { _id, displayName: productName, price, itemQuantity: 1, displayImage },
            `${productType}product`
         )
      )
   }
   return (
      <CardFooterStyle>
         <CardActions>
            <Button
               onClick={addItemToCart}
               variant='outlined'
               color='success'
               size='large'
               endIcon={<AddShoppingCartIcon />}
            >
               Kosárba
            </Button>
         </CardActions>
      </CardFooterStyle>
   )
}

export default CardFooter

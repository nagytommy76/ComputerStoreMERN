import React from 'react'
import { useAppDispatch } from '../../../../app/hooks'
import { sendCartItemToSaveInDB } from '../../../../app/slices/CartSlice'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { CardFooterStyle } from './CardStyle'
import { CardActions, Button } from '@mui/material'

type Props = {
   toSaveCartItems: {
      _id: string
      displayName: string
      price: number
      itemQuantity: number
      displayImage: string
      productType: string
   }
}

const CardFooter: React.FC<Props> = ({ toSaveCartItems }) => {
   const dispatch = useAppDispatch()
   const addItemToCart = () => {
      dispatch(sendCartItemToSaveInDB(toSaveCartItems))
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

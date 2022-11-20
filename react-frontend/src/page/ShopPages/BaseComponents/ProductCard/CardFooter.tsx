import React from 'react'
import { useAppDispatch } from '../../../../app/hooks'
import { sendCartItemToSaveInDB } from '../../../../app/slices/CartSlice'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
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

   // Be kéne tenni egy array-be? majd Redux-ból megkeresni/megjeleníteni az összehasonlíytás oldalon
   const handleAddToCompare = () => {
      console.log(toSaveCartItems.productType)
      console.log(toSaveCartItems._id)
      // Létrehozni egy array-t: Context/state?
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
            <Tooltip title='Összhasonlítás' placement='top' arrow>
               <IconButton onClick={handleAddToCompare} color='info' aria-label='compare' size='large'>
                  <CompareArrowsIcon fontSize='inherit' />
               </IconButton>
            </Tooltip>
         </CardActions>
      </CardFooterStyle>
   )
}

export default CardFooter

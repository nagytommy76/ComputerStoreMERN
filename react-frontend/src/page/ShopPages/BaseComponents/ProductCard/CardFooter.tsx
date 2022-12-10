import React from 'react'
import { useAppDispatch } from '../../../../app/hooks'
import { sendCartItemToSaveInDB } from '../../../../app/slices/CartSlice'
import useAddToCompare, { FooterProps } from './Hook/useAddToCompare'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { CardActions, Button } from '@mui/material'
import { CardFooterStyle } from './CardStyle'

const CardFooter: React.FC<FooterProps> = ({ toSaveCartItems }) => {
   const reduxDispatch = useAppDispatch()
   const handleAddToCompare = useAddToCompare(toSaveCartItems)

   const addItemToCart = () => {
      reduxDispatch(sendCartItemToSaveInDB(toSaveCartItems))
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

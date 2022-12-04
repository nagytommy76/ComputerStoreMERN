import React, { useContext } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { sendCartItemToSaveInDB } from '../../../../app/slices/CartSlice'
import { addProductIdsToCompare } from '../../../../app/slices/ProductCompareSlice'
import { MessageContext, MessageTypes } from '../Context/MessageContext'

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
   const reduxDispatch = useAppDispatch()
   const savedProductIdsToCompare = useAppSelector(state => state.productCompare.productIdsToComare)
   const { dispatch } = useContext(MessageContext)

   const addItemToCart = () => {
      reduxDispatch(sendCartItemToSaveInDB(toSaveCartItems))
   }

   // Be kéne tenni egy array-be? majd Redux-ból megkeresni/megjeleníteni az összehasonlíytás oldalon
   const handleAddToCompare = () => {
      // Ide majd egy felugró ablakot, hogy max 4 (vagy valamennyit) lehet csak összehasonlítani,
      // Illetve ha már tartalmazza akkor is
      if (savedProductIdsToCompare.length < 4) {
         const isContainsId = savedProductIdsToCompare.find(
            compare => compare.productId === toSaveCartItems._id
         )

         if (!isContainsId) {
            // ha undefined, akkor tedd bele (nincs benne)
            reduxDispatch(
               addProductIdsToCompare({
                  displayImage: toSaveCartItems.displayImage,
                  displayName: toSaveCartItems.displayName,
                  productId: toSaveCartItems._id,
                  productType: toSaveCartItems.productType,
               })
            )
         } else {
            dispatch({
               type: MessageTypes.SET_ISACTIVE,
               payload: {
                  isActive: true,
                  message: `Már hozzáadtad az összeahsonlításhoz a ( ${toSaveCartItems.displayName} ) terméket`,
                  severity: 'error',
               },
            })
         }
      } else {
         dispatch({
            type: MessageTypes.SET_ISACTIVE,
            payload: {
               isActive: true,
               message: '4-nél több terméket nem hasonlíthatsz össze!',
               severity: 'warning',
            },
         })
      }
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

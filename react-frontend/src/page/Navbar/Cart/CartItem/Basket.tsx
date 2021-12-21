import React from 'react'
import { Container, QuantityStyle } from './BasketStyle'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { increaseOrDecreaseByOne } from '../../../../app/slices/CartSlice'

import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

import TooltipForDisabled from '../../../BaseElements/TooltipForDisabled/TooltipForDisabled'

const Basket: React.FC<Props> = ({ quaintity, id }) => {
   const dispatch = useAppDispatch()
   const paymentWasSuccess = useAppSelector((state) => state.payment.isPaymentSuccess)
   const decrease = () => {
      if (quaintity !== 1) dispatch(increaseOrDecreaseByOne(id, false))
   }
   const increase = () => dispatch(increaseOrDecreaseByOne(id))
   return (
      <Container>
         <TooltipForDisabled
            isComponentDisabled={paymentWasSuccess}
            tooltipText='A termékek már ki lettek fizetve! Kérlek folytasd a vásárlást'>
            <IconButton disabled={paymentWasSuccess} onClick={decrease} color='error' aria-label='decrease' size='small'>
               <RemoveIcon />
            </IconButton>
         </TooltipForDisabled>
         <QuantityStyle>{quaintity} db</QuantityStyle>
         <TooltipForDisabled
            isComponentDisabled={paymentWasSuccess}
            tooltipText='A termékek már ki lettek fizetve! Kérlek folytasd a vásárlást'>
            <IconButton disabled={paymentWasSuccess} onClick={increase} color='success' aria-label='increase' size='small'>
               <AddIcon />
            </IconButton>
         </TooltipForDisabled>
      </Container>
   )
}

type Props = {
   id: string
   quaintity: number
}

export default Basket

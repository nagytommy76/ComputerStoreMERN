import React from 'react'
import { Container, IncreaseDecreaseStyle, QuantityStyle } from './BasketStyle'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { increaseOrDecreaseByOne } from '../../../../app/slices/CartSlice'

import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Tooltip from '@mui/material/Tooltip'

const Basket: React.FC<Props> = ({ quaintity, id }) => {
   const dispatch = useAppDispatch()
   const paymentWasSuccess = useAppSelector((state) => state.payment.isPaymentSuccess)
   const decrease = () => {
      if (quaintity !== 1) dispatch(increaseOrDecreaseByOne(id, false))
   }
   const increase = () => dispatch(increaseOrDecreaseByOne(id))
   return (
      <Container>
         <Tooltip title='A termékek már ki lettek fizetve! Kérlek folytasd a vásárlást' arrow>
            <IconButton disabled={paymentWasSuccess} onClick={decrease} color='error' aria-label='decrease' size='small'>
               <RemoveIcon />
            </IconButton>
         </Tooltip>
         <QuantityStyle>{quaintity} db</QuantityStyle>
         <IconButton disabled={paymentWasSuccess} onClick={increase} color='success' aria-label='increase' size='small'>
            <AddIcon />
         </IconButton>
      </Container>
   )
}

type Props = {
   id: string
   quaintity: number
}

export default Basket

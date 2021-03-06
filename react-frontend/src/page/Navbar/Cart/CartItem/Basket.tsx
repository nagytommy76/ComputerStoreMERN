import React from 'react'
import { Container, QuantityStyle } from './BasketStyle'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { increaseOrDecreaseByOne } from '../../../../app/slices/CartSlice'

import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

const Basket: React.FC<Props> = ({ quaintity, id }) => {
   const dispatch = useAppDispatch()
   const { isCardPaySuccess, isCashPaySuccess } = useAppSelector(state => state.payment)
   const decrease = () => {
      if (quaintity !== 1) dispatch(increaseOrDecreaseByOne(id, false))
   }
   const increase = () => dispatch(increaseOrDecreaseByOne(id))
   return (
      <Container>
         <IconButton
            disabled={isCardPaySuccess || isCashPaySuccess}
            onClick={decrease}
            color='error'
            aria-label='decrease'
            size='small'
         >
            <RemoveIcon />
         </IconButton>
         <QuantityStyle>{quaintity} db</QuantityStyle>
         <IconButton
            disabled={isCardPaySuccess || isCashPaySuccess}
            onClick={increase}
            color='success'
            aria-label='increase'
            size='small'
         >
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

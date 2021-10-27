import React from 'react'
import { StyledCloseIcon } from './CartItemStyle'
import { useAppDispatch } from '../../../../app/hooks'
import { removeItemsFromCart } from '../../../../app/slices/CartSlice'

const DeleteIcon: React.FC<{ id: string }> = ({ id }) => {
   const dispatch = useAppDispatch()
   return <StyledCloseIcon onClick={() => dispatch(removeItemsFromCart(id))}>&#10007;</StyledCloseIcon>
}

export default DeleteIcon

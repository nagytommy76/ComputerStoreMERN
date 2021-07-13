import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { useAppSelector } from '../../../app/hooks'

const CartButton = () => {
   const totalQuantity = useAppSelector((state) => state.cart.totalQuantity)
   const openCartSlide = () => {
      console.log('dsasddsa')
   }
   return (
      <NavbarCartButtonStyle onClick={() => openCartSlide()}>
         <ItemsInCartStyle>{totalQuantity}</ItemsInCartStyle>
         <FontAwesomeIcon icon={['fas', 'cart-arrow-down']} size='3x' />
      </NavbarCartButtonStyle>
   )
}

const NavbarCartButtonStyle = styled.button`
   position: absolute;
   right: 0;
   background-color: hsla(107, 0%, 20%, 0.8);
   width: 100px;
   height: 100%;
   border-radius: 2px;
   border: none;
   cursor: pointer;
   color: white;
   transition: background-color 0.2s;
   &:hover {
      background-color: hsla(107, 0%, 38%, 0.8);
   }
`

const ItemsInCartStyle = styled.div`
   position: absolute;
   right: 3px;
   top: 3px;
   display: flex;
   align-items: center;
   justify-content: center;

   font-size: 1.3rem;
   width: 30px;
   height: 30px;
   border-radius: 50%;
   background-color: #29c400;
   color: black;
   font-weight: 600;
`

export default CartButton

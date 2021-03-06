import React, { useContext } from 'react'
import { DropStyle, DropLinkItem, CloseDropdownMenu } from '../DropMenuStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavbarContext } from '../../NavbarContext'

import { logoutUser } from '../../../../app/slices/AuthSlice'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { removeCartItemsAfterLogout } from '../../../../app/slices/CartSlice'
import { restoreUserDetails } from '../../../../app/slices/Checkout/UserDetailsSlice'

type Prop = {
   reference: React.MutableRefObject<null>
}

const DropMenu: React.FC<Prop> = ({ reference }) => {
   const dispatch = useAppDispatch()
   const isAdmin = useAppSelector(state => state.auth.isAdmin)
   const isMobileSize = useAppSelector(state => state.mobile.isMobile)
   const { setIsUserDropOpen } = useContext(NavbarContext)

   const logout = () => {
      dispatch(restoreUserDetails())
      dispatch(removeCartItemsAfterLogout())
      dispatch(logoutUser())
   }

   const clickEvent = (event: React.MouseEvent) => {
      event.stopPropagation()
      setIsUserDropOpen(false)
   }
   return (
      <DropStyle ref={reference}>
         {isMobileSize && (
            <CloseDropdownMenu onClick={clickEvent}>
               <FontAwesomeIcon icon={['fas', 'times']} size='2x' />
            </CloseDropdownMenu>
         )}
         <DropLinkItem to='/orders'>Korábbi rendelések</DropLinkItem>
         <DropLinkItem onClick={logout} to=''>
            Kijelentkezés
         </DropLinkItem>
         {isAdmin && <DropLinkItem to='/admin'>Admin Felület</DropLinkItem>}
      </DropStyle>
   )
}

export default DropMenu

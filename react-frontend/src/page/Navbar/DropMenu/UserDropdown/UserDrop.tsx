import React, { useContext } from 'react'
import { DropStyle, DropLinkItem, CloseDropdownMenu } from '../DropMenuStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { logoutUser } from '../../../../app/slices/AuthSlice'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { NavbarContext } from '../../NavbarContext'
import { removeCartItemsAfterLogout } from '../../../../app/slices/CartSlice'

type Prop = {
   reference: React.MutableRefObject<null>
}

const DropMenu: React.FC<Prop> = ({ reference }) => {
   const dispatch = useAppDispatch()
   const isAdmin = useAppSelector((state) => state.auth.isAdmin)
   const isMobileSize = useAppSelector((state) => state.mobile.isMobile)
   const { setIsUserDropOpen } = useContext(NavbarContext)

   const logout = () => {
      dispatch(logoutUser())
      dispatch(removeCartItemsAfterLogout())
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
         <DropLinkItem onClick={logout} to=''>
            Kijelentkezés
         </DropLinkItem>
         {isAdmin && <DropLinkItem to='/admin'>Admin Felület</DropLinkItem>}
      </DropStyle>
   )
}

export default DropMenu

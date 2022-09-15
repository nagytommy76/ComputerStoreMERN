import React, { useContext } from 'react'
import useLogout from './Hook/useLogout'
import { DropStyle, DropLinkItem, CloseDropdownMenu } from '../DropMenuStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavbarContext } from '../../NavbarContext'

import { useAppSelector } from '../../../../app/hooks'

const DropMenu: React.FC = () => {
   const logout = useLogout()
   const isAdmin = useAppSelector(state => state.auth.isAdmin)
   const isMobileSize = useAppSelector(state => state.mobile.isMobile)
   const { setIsUserDropOpen, setIsNavbarOpen } = useContext(NavbarContext)

   const clickEvent = (event: React.MouseEvent) => {
      event.stopPropagation()
      setIsUserDropOpen(false)
      isMobileSize && setIsNavbarOpen(false)
   }

   const closeDropMenu = (event: React.MouseEvent) => {
      event.stopPropagation()
      setIsUserDropOpen(false)
   }
   return (
      <DropStyle>
         {isMobileSize && (
            <CloseDropdownMenu onClick={closeDropMenu}>
               <FontAwesomeIcon icon={['fas', 'times']} size='2x' />
            </CloseDropdownMenu>
         )}
         <DropLinkItem onClick={clickEvent} to='/orders'>
            Korábbi rendelések
         </DropLinkItem>
         <DropLinkItem onClick={logout} to='#'>
            Kijelentkezés
         </DropLinkItem>
         {isAdmin && (
            <DropLinkItem onClick={clickEvent} to={`/${process.env.REACT_APP_PROTECTED_ADMIN_ROUTE}`}>
               Admin Felület
            </DropLinkItem>
         )}
      </DropStyle>
   )
}

export default DropMenu

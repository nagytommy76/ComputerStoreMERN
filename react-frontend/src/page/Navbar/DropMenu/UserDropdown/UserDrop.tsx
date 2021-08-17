import React from 'react'
import { DropStyle, DropLinkItem, CloseDropdownMenu } from '../DropMenuStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { logoutUser } from '../../../../app/slices/AuthSlice'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'

type Prop = {
   reference: React.MutableRefObject<null>
   setIsUserDropOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DropMenu: React.FC<Prop> = ({ reference, setIsUserDropOpen }) => {
   const dispatch = useAppDispatch()
   const isAdmin = useAppSelector((state) => state.auth.isAdmin)
   const isMobileSize = useAppSelector((state) => state.mobile.isMobile)

   const logout = () => {
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
         <DropLinkItem onClick={logout} to=''>
            Kijelentkezés
         </DropLinkItem>
         {isAdmin && <DropLinkItem to='/admin'>Admin Felület</DropLinkItem>}
      </DropStyle>
   )
}

export default DropMenu

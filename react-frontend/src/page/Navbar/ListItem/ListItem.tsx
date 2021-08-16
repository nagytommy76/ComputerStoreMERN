import React, { useRef } from 'react'
import LinkItem from '../LinkItems/LinkItem'
import BaseDrop from '../DropMenu/BaseDrop/BaseDrop'
import ShopDropMenu from '../DropMenu/ShopDropdown/DropMenu'
import UserDrop from '../DropMenu/UserDropdown/UserDrop'
import Toggler from '../ThemeToggler/Toggle'

import { TogglerCartListItems } from '../LinkItems/LinkItemStyles'
import { StyledUnorderedList } from '../NavbarStyles'
import { useAppSelector } from '../../../app/hooks'

const ListItem: React.FC<Props> = ({ isShopDropOpen, isUserDropOpen, setIsShopDropOpen, setIsUserDropOpen }) => {
   const userLoggedIn = useAppSelector((state) => state.auth.userLoggedIn)
   const userName = useAppSelector((state) => state.auth.userName)
   const userDropRef = useRef(null)
   const shopDropRef = useRef(null)

   return (
      <StyledUnorderedList>
         {!userLoggedIn && <LinkItem to='/login' linkText='Belépés' />}
         {!userLoggedIn && <LinkItem to='/register' linkText='Regisztráció' />}
         {userLoggedIn && (
            <BaseDrop text={userName} dropRef={userDropRef} isDropOpen={isUserDropOpen} setIsDropOpen={setIsUserDropOpen}>
               <UserDrop reference={userDropRef} />
            </BaseDrop>
         )}
         <BaseDrop text='Shop Menü' dropRef={shopDropRef} isDropOpen={isShopDropOpen} setIsDropOpen={setIsShopDropOpen}>
            <ShopDropMenu reference={shopDropRef} setIsShopDropOpen={setIsShopDropOpen} />
         </BaseDrop>
         <TogglerCartListItems>
            <Toggler />
         </TogglerCartListItems>
      </StyledUnorderedList>
   )
}

type Props = {
   isShopDropOpen: boolean
   isUserDropOpen: boolean
   setIsShopDropOpen: React.Dispatch<React.SetStateAction<boolean>>
   setIsUserDropOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default ListItem

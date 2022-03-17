import React from 'react'

export const NavbarContext = React.createContext<NavbarContextTypes>({
   isShopDropOpen: false,
   isUserDropOpen: false,
   isNavbarOpen: false,
   setIsShopDropOpen: () => false,
   setIsUserDropOpen: () => false,
   setIsNavbarOpen: () => false,
   isCartOpen: false,
   setIsCartOpen: () => false,
})

export type NavbarContextTypes = {
   isShopDropOpen: boolean
   isUserDropOpen: boolean
   isNavbarOpen: boolean
   isCartOpen: boolean
   setIsShopDropOpen: React.Dispatch<React.SetStateAction<boolean>>
   setIsUserDropOpen: React.Dispatch<React.SetStateAction<boolean>>
   setIsNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>
   setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>
}

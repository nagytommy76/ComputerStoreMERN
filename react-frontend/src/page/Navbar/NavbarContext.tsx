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
   anchorEl: null,
   setAnchorEl: () => null,
})

export type NavbarContextTypes = {
   anchorEl: HTMLElement | null
   isShopDropOpen: boolean
   isUserDropOpen: boolean
   isNavbarOpen: boolean
   isCartOpen: boolean
   setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
   setIsShopDropOpen: React.Dispatch<React.SetStateAction<boolean>>
   setIsUserDropOpen: React.Dispatch<React.SetStateAction<boolean>>
   setIsNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>
   setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>
}
